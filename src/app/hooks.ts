import { useQuery } from '@tanstack/react-query';
import axiosStarWars from './api/axios';
import useCharactersStore from "../store/store";
import {Character} from "../types/characters";
import {useEffect} from "react";


interface CharacterData {
    characters: Character[],
    next: string | null;
    previous: string | null;
}

// Функция для получения данных о персонажах
const fetchCharacters = async (page: number) : Promise<CharacterData> => {
    const { data }  = await axiosStarWars.get(`people/?page=${page}`);
    return {characters: data.results, next : data.results, previous: data.previous}
};

export const useCharacters = (page: number) => {
    const { setCharacters, setLoading, setError } = useCharactersStore();

    const { data, isSuccess, isLoading, error } = useQuery<CharacterData, Error>({
        queryKey: ['characters', page],
        queryFn: () => fetchCharacters(page),
        refetchOnWindowFocus: false,
    });

    useEffect(() => {
        if(isSuccess) {
            setCharacters(data.characters);
        }

        if(error){
            setError(error.message)
        }
    }, [isSuccess, data, error, setCharacters, setError]);



    return { data,isSuccess, isLoading, error, setLoading };
};