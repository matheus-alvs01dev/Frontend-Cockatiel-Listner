import { Children, useEffect, useState } from "react";
import { useCockatielDataMutate } from "../../hooks/useCockatielDataMutate";
import "./style.scss";
import { IoIosCloseCircle } from "react-icons/io";
import { Input, InputSelectGender, InputSelectMutation } from "./Inputs";


interface ModalProps {
    closeModal(): void;
    submit(): void;
    children: string;
    required: boolean;
    
  }
  
  export default function CreateModal({ closeModal, submit, children,required }: ModalProps) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [gender, setGender] = useState("unknown");
    const [mutation, setMutation] = useState("");
    const [age, setAge] = useState(0);


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
                required={required}
              />
              <Input
                label="Image"
                value={image}
                updateValue={setImage}
                required={required}
              />
              <InputSelectGender
                label="Gender"
                value={gender}
                updateValue={setGender}
                required={required}
              />
              <InputSelectMutation
                label="Mutation"
                value={mutation}
                updateValue={setMutation}
                required={required}
              />
              <Input label="Age" value={age} updateValue={setAge} required={true} />
            </form>
            <button onClick={submit} className="btn-secondary">
              {children}
            </button>
          </div>
        </div>
      );
    }
    