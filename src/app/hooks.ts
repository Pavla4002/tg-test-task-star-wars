import { useQuery } from '@tanstack/react-query';
import axiosInstance from './api/axios';
import useCharactersStore from "../store/store";
import {Character} from "../types/characters";
import {useEffect} from "react";


// Функция для получения данных о персонажах
const fetchCharacters = async () : Promise<Character[]> => {
    const response = await axiosInstance.get('people/');
    return response.data.results;
};

export const useCharacters = () => {
    const { setCharacters, setLoading, setError } = useCharactersStore();
    // <Character[], Error>
    const { data,isSuccess , isLoading, error } = useQuery<Character[], Error>({queryKey:['characters'], queryFn: fetchCharacters, refetchOnWindowFocus: false});

    useEffect(() => {
        if(isSuccess) {
            console.log(data);
            setCharacters(data);
        }

        if(error){
            console.log(error)
            setError(error.message)
        }
    }, [isSuccess, data, error, setCharacters, setError]);



    return { data,isSuccess , isLoading, error };
};