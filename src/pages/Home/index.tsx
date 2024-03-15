import { useEffect, useState } from "react";
import Card from "../../components/Card";
import { useCockatielData } from "../../hooks/useCockatielData";
import "./style.scss";
import CreateModal from "../../components/CreateModal";
import Banner from "../../components/Banner";
import { CockatielData } from "../../interface/CockatielData";
import axios from "axios";
import { useCockatielDelete } from "../../hooks/useCockatielDelete";



export default function Home() {
  
  const { data, isLoading, isError } = useCockatielData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const{useDelete, isSuccess} = useCockatielDelete();
  const API_URL = 'http://localhost:8080';
  
  

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleDelete = (deleteCockatiel: CockatielData) => {
    useDelete(deleteCockatiel);
  };

  useEffect(() => {
    if (!isSuccess) return;
    axios.get(API_URL + '/cockatiel').then((response) => {
      console.log(response.data);
    });
  }, [isSuccess]);

  return (
    <div className="homeContainer">
      <Banner />
      <h1>My Cockatiels</h1>
      <div className="card-grid">
        {
          !isLoading && 
            <>
              {data?.map((cockatielData) => 
                <Card onclick={() => handleDelete(cockatielData)}
                  key={cockatielData.id}
                  name={cockatielData.name}
                  image={cockatielData.image}
                  age={cockatielData.age}
                  gender={cockatielData.gender}
                  mutation={cockatielData.mutation}
                />
              )}
            </>
        }
        
        {isLoading && <p>Loading...</p>}
        {isError && <p>Something went wrong</p>}
      </div>
      <>
        {isModalOpen && (
          <CreateModal closeModal={() => setIsModalOpen(false)} />
        )}
        <button onClick={handleModalOpen}>Add new Cockatiel</button>
      </>
    </div>
  );
}
