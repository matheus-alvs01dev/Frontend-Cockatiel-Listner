import "./style.scss";
import { IoIosCloseCircle } from "react-icons/io";
import { Input, InputSelectGender, InputSelectMutation } from "./Inputs";

interface ModalProps {
  closeModal(): void;
  submit(): void;
  children: string;
  nameRequired?: boolean;
  imageRequired?: boolean;
  genderRequired?: boolean;
  mutationRequired?: boolean;
  ageRequired?: boolean;
  formData: {
    name: string;
    image: string;
    gender: string;
    mutation: string;
    age: number;
  };
  setFormData(data: {
    name: string;
    image: string;
    gender: string;
    mutation: string;
    age: number;
  }): void;
}

export default function CreateModal({
  closeModal,
  submit,
  children,
  nameRequired,
  imageRequired,
  genderRequired,
  mutationRequired,
  ageRequired,
  formData,
  setFormData,
}: ModalProps) {
  const { name, image, gender, mutation, age } = formData;

  return (
    <div className="modal-overlay">
      <div className="modal-body">
        <div className="close-container">
          <IoIosCloseCircle onClick={closeModal} />
        </div>
        <h2>Add new Cockatiel</h2>
        <form className="input-container">
          <Input
            label="Name"
            value={name}
            updateValue={(value: string) =>
              setFormData({ ...formData, name: value })
            }
            required={nameRequired}
          />
          <Input
            label="Image"
            value={image}
            updateValue={(value: string) =>
              setFormData({ ...formData, image: value })
            }
            required={imageRequired}
          />
          <InputSelectGender
            label="Gender"
            value={gender}
            updateValue={(value: string) =>
              setFormData({ ...formData, gender: value })
            }
            required={genderRequired}
          />
          <InputSelectMutation
            label="Mutation"
            value={mutation}
            updateValue={(value: string) =>
              setFormData({ ...formData, mutation: value })
            }
            required={mutationRequired}
          />
          <Input
            label="Age"
            value={age}
            updateValue={(value: number) =>
              setFormData({ ...formData, age: value })
            }
            required={ageRequired}
          />

        </form>
        <button onClick={submit} className="btn-secondary">
          {children}
        </button>
      </div>
    </div>
  );
}
