import { useEffect, useState } from "react";
import { useCockatielDataMutate } from "../../hooks/useCockatielDataMutate";
import "./style.scss";
import { IoIosCloseCircle } from "react-icons/io";
import { Input, InputSelectGender, InputSelectMutation } from "./Inputs";



interface ModalProps {
  closeModal(): void;
}


export default function CreateModal({ closeModal }: ModalProps) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [gender, setGender] = useState("unknown");
  const [mutation, setMutation] = useState("");
  const [age, setAge] = useState(0);
  const { mutate, isSuccess } = useCockatielDataMutate();
  

  const submit = () => {
    const CockatielData = {
      name,
      image,
      gender,
      mutation,
      age,
    };

    mutate(CockatielData);
  };

  useEffect(() => {
    if (!isSuccess) return;
    closeModal();
  }, [isSuccess]);

  return (
    <div className="modal-overlay">
      <div className="modal-body">
        <div className="close-container">
          <IoIosCloseCircle onClick={closeModal}/>
          </div>
        <h2>Add new Cockatiel</h2>
        <form className="input-container">
          <Input
            label="Name"
            value={name}
            updateValue={setName}
            required={true}
          />
          <Input
            label="Image"
            value={image}
            updateValue={setImage}
            required={false}
          />
          <InputSelectGender
            label="Gender"
            value={gender}
            updateValue={setGender}
            required={true}
          />
          <InputSelectMutation
            label="Mutation"
            value={mutation}
            updateValue={setMutation}
            required={true}
          />
          <Input label="Age" value={age} updateValue={setAge} required={true} />
        </form>
        <button onClick={submit} className="btn-secondary">
          Adcionar Calopsita
        </button>
      </div>
    </div>
  );
}
