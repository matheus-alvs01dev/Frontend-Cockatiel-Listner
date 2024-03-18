import { useEffect, useState } from "react";
import { useCockatielDataMutate } from "../../hooks/useCockatielDataMutate";
import CreateModal from "../CreateModal";


interface PostModalProps {
  closePostModal(): void;
}
export default function PostModal({ closePostModal }: PostModalProps) {
  const { mutate, isSuccess } = useCockatielDataMutate();
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    gender: "Unknown",
    mutation: "Normal",
    age: 0
  });

  const submit = () => {
    mutate(formData);
  };

  useEffect(() => {
    if (!isSuccess) return;
    closePostModal();
  }, [isSuccess]);

  return (
    <CreateModal
      nameRequired={true}
      submit={submit}
      closeModal={closePostModal}
      formData={formData}
      setFormData={setFormData}
      children="Add New Cockatiel"
    />
  );
}
