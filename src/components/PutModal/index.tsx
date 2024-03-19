import { useEffect, useState } from "react";
import CreateModal from "../CreateModal";
import { CockatielData } from "../../interface/CockatielData";
import { useCockatielPut } from "../../hooks/useCockatielPut";

interface PutModalProps {
  closePutModal(): void;
  cockatiel?: CockatielData;
}

export default function PutModal({ cockatiel, closePutModal }: PutModalProps) {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    image: "",
    gender: "",
    mutation: "",
    age: 0,
  });

  const { putCockatiel } = useCockatielPut();

  useEffect(() => {
    if (!cockatiel) return;
    setFormData((prevData) => ({
      ...prevData,
      id: cockatiel.id || "",
      name: cockatiel.name,
      image: cockatiel.image,
      gender: cockatiel.gender,
      mutation: cockatiel.mutation,
      age: cockatiel.age,
    }));
  }, [cockatiel]);

  const handleSubmit = () => {
    putCockatiel.mutate(formData);
    console.log("Cockatiel data:", formData);
    closePutModal();
  };



  return (
    <CreateModal
      submit={() => handleSubmit()}
      closeModal={closePutModal}
      formData={formData}
      setFormData={(data) =>
        setFormData((prevData) => ({ ...prevData, ...data }))
      }
      children="Edit Cockatiel"
    />
  );
}
