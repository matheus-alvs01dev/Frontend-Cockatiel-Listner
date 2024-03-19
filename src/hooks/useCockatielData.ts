import axios, { AxiosPromise } from "axios"
import { CockatielData } from "../interface/CockatielData";
import { useQuery } from "@tanstack/react-query";

const Api_URL = 'https://backend-cockatiel-listner.onrender.com';

const fetchData = async (): AxiosPromise<CockatielData[]>=>{
    const response = axios.get(Api_URL + "/cockatiel")
    return response;
}

export function useCockatielData(){
    const query = useQuery({
        queryFn: fetchData,
        queryKey:["cockatiel-data"],
        retry: 2

    })

    return{
        ...query,
        data: query.data?.data
    }
}