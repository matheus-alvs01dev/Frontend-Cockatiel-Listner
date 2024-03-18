import { FaRegTrashAlt } from "react-icons/fa";
import "./style.scss";
import { useState } from "react";
import PutModal from "../PutModal";

interface CardProps {
  name: string;
  image: string;
  age: number;
  gender: string;
  mutation: string;
  handleDelete?: () => void;
  onClickPut: () => void;
  
}

export default function Card({
  name,
  image,
  age,
  gender,
  mutation,
  handleDelete,
  onClickPut
}: CardProps) {
  const [isPutModalOpen, setIsPutModalOpen] = useState(false);

  return (
    <div className="card">
        <button onClick={handleDelete} className="delete-btn">
          <FaRegTrashAlt />
        </button>
      <img src={image} alt={name}/>
      <h2>{name}</h2>
      <span>
        <b>Age:</b>
        {age}
      </span>
      <span>
        <b>Gender:</b>
        {gender}
      </span>
      <span>
        <b>Mutation:</b>
        {mutation}
      </span>
      {isPutModalOpen && (
        <PutModal closePutModal={() => setIsPutModalOpen(false)} />)        
      }
      <button className="edit-btn" onClick={onClickPut} >

          Edit
        </button>
        
    </div>
  );
}
