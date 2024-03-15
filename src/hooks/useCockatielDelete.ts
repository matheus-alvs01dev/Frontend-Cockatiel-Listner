import axios from "axios";
import { CockatielData } from "../interface/CockatielData";
import { QueryClient, useMutation } from "@tanstack/react-query";

const useDelete = (deleteCockatiel: CockatielData) => {
  const response = axios.delete(
    `http://localhost:8080/cockatiel/${deleteCockatiel.id}`
  );
  return response;
};

export function useCockatielDelete() {
  const queryClient = new QueryClient();
  const query = useMutation({
    mutationFn: useDelete,
    retry: 2,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cockatiel-data"] });
    },
  });
  return {
    ...query,
    useDelete,
  };
}
