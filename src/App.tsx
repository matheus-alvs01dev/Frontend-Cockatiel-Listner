import { useState } from "react";
import Card from "./components/Card";
import { useCockatielData } from "./hooks/useCockatielData";
import "./style.scss";
import Banner from "./components/Banner";
import { CockatielData } from "./interface/CockatielData";
import { useCockatielDelete } from "./hooks/useCockatielDelete";
import PostModal from "./components/PostModal";
import PutModal from "./components/PutModal";

export default function App() {
  const { data, isLoading, isError } = useCockatielData();
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const { deleteCockatiel } = useCockatielDelete();
  const [selectedCockatiel, setSelectedCockatiel] =
    useState<CockatielData | null>(null);
  const [isPutModalOpen, setIsPutModalOpen] = useState(false);

  const handlePostModalOpen = () => {
    setIsPostModalOpen(true);
  };

  const handleDelete = (cockatielData: CockatielData) => {
    deleteCockatiel.mutate(cockatielData);
  };

  const handlePutModalOpen = (cockatielData: CockatielData) => {
    setSelectedCockatiel(cockatielData);
    setIsPutModalOpen(true);
  };

  return (
    <div className="homeContainer">
      <Banner />
      <div className="content-container">
        <div className="card-grid">
          {!isLoading && (
            <>
              {data?.map((cockatielData) => (
                <Card
                  handleDelete={() => handleDelete(cockatielData)}
                  key={cockatielData.id}
                  name={cockatielData.name}
                  image={cockatielData.image}
                  age={cockatielData.age}
                  gender={cockatielData.gender}
                  mutation={cockatielData.mutation}
                  onClickPut={() => handlePutModalOpen(cockatielData)}
                />
              ))}
            </>
          )}

          {isLoading && <p>Loading...</p>}
          {isError && <p>Something went wrong</p>}
        </div>
        <>
          {isPostModalOpen && (
            <PostModal closePostModal={() => setIsPostModalOpen(false)} />
          )}
          <button onClick={handlePostModalOpen}>Add new Cockatiel</button>
        </>
        <>
          {isPutModalOpen && selectedCockatiel && (
            <PutModal
              cockatiel={selectedCockatiel}
              closePutModal={() => setIsPutModalOpen(false)}
            />
          )}
        </>
      </div>
    </div>
  );
}
