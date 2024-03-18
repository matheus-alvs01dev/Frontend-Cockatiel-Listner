import axios, { AxiosPromise } from "axios";
import { CockatielData } from "../interface/CockatielData";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const usePut = (putCockatielData: CockatielData) : AxiosPromise<any>=> {
  const response = axios.put(
    `http://localhost:8080/cockatiel`,
    putCockatielData
  );
  return response;
};

export function useCockatielPut() {
  const queryClient = useQueryClient();
  const putCockatiel = useMutation({
    mutationFn: usePut,
    retry: 2,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cockatiel-data"] });
    },
  });
  return {
    putCockatiel
  };
}
