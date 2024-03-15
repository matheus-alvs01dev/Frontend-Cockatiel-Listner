import axios, { AxiosPromise } from "axios";
import { CockatielData } from "../interface/CockatielData";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const Api_URL = "http://localhost:8080";

const postData = async (data: CockatielData): AxiosPromise<any> => {
  const response = axios.post(Api_URL + "/cockatiel", data);
  return response;
};

export function useCockatielDataMutate() {
  const queryClient = useQueryClient();
  const query = useMutation({
    mutationFn: postData,
    retry: 2,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cockatiel-data"] });
    },
  });

  return {
    ...query,
    data: query.data?.data
  };
}
