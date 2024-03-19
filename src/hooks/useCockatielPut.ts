import axios, { AxiosPromise } from "axios";
import { CockatielData } from "../interface/CockatielData";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const Api_URL = 'https://backend-cockatiel-listner.onrender.com';

const usePut = (putCockatielData: CockatielData) : AxiosPromise<any>=> {
  const response = axios.put(
    Api_URL,
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
