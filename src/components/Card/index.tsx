import { FaRegTrashAlt } from "react-icons/fa";
import "./style.scss"

interface CardProps {
  name: string;
  image: string;
  age: number;
  gender: string;
  mutation: string;
  onclick?: () => void;
}

export default function Card({
  name,
  image,
  age,
  gender,
  mutation,
  onclick,
}: CardProps) {
  return (
    <div className="card">
      <button onClick={onclick} className="delete-btn"> <FaRegTrashAlt />
</button>
      <img src={image} />
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
    </div>
  );
}
