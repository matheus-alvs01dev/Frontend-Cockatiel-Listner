import { useEffect, useState } from "react";
import { useCockatielDataMutate } from "../../hooks/useCockatielDataMutate";
import "./style.scss";
import { IoIosCloseCircle } from "react-icons/io";

interface InputProps {
  label: string;
  value: string | number;
  updateValue(value: any): void;
  required: boolean;
}

interface ModalProps {
  closeModal(): void;
}

const Input = ({ label, value, updateValue, required }: InputProps) => {
  return (
    <div>
      <label>{label}</label>
      <input
        value={value}
        onChange={(event) => updateValue(event.target.value)}
        required={required}
      />
    </div>
  );
};

const InputSelectGender = ({ label, value, updateValue }: InputProps) => {
  return (
    <div>
      <label>{label}</label>
      <select
        value={value}
        onChange={(event) => updateValue(event.target.value)}
      >
        <option value="unknown">Unknown</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </div>
  );
};

const InputSelectMutation = ({
  label,
  value,
  updateValue,
  required,
}: InputProps) => {
  return (
    <div>
      <label>{label}</label>
      <select
        value={value}
        onChange={(event) => updateValue(event.target.value)}
        required={required}
      >
        <option value="Normal">Normal</option>
        <option value="Pearl">Pearl</option>
        <option value="Lutino">Lutino</option>
        <option value="Whiteface">Whiteface</option>
        <option value="Albino">Albino</option>
        <option value="Pied">Pied</option>
        <option value="Yellowface">Yellowface</option>
        <option value="Cinnamon">Cinnamon</option>
        <option value="Silver">Silver</option>
      </select>
    </div>
  );
};

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
