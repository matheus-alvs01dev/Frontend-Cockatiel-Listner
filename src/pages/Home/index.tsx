import { useState } from "react";
import Card from "../../components/Card";
import { useCockatielData } from "../../hooks/useCockatielData";
import "./style.scss";
import CreateModal from "../../components/CreateModal";
import Banner from "../../components/Banner";

export default function Home() {
  const { data } = useCockatielData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="homeContainer">
      <Banner />
      <h1>My Cockatiels</h1>
      <div className="card-grid">
        {data?.map((cockatielData) => (
          <Card
            key={cockatielData.id}
            name={cockatielData.name}
            image={cockatielData.image}
            age={cockatielData.age}
            gender={cockatielData.gender}
            mutation={cockatielData.mutation}
          />
        ))}
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
