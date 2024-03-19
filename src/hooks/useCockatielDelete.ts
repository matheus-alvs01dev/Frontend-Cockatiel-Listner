import axios, { AxiosPromise } from "axios";
import { CockatielData } from "../interface/CockatielData";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const Api_URL = 'https://backend-cockatiel-listner.onrender.com';

const useDelete = (deleteCockatielData: CockatielData) : AxiosPromise<any>=> {
  const response = axios.delete(
    `${Api_URL}/cockatiel/${deleteCockatielData.id}`
  );
  return response;
};

export function useCockatielDelete() {
  const queryClient = useQueryClient();
  const deleteCockatiel = useMutation({
    mutationFn: useDelete,
    retry: 2,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cockatiel-data"] });
    },
  });
  return {
    deleteCockatiel
  };
}
