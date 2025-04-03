import { useQuery } from '@tanstack/react-query';
import axiosStarWars from './api/axios';
import useCharactersStore from "../store/store";
import {Character} from "../types/characters";
import {useEffect} from "react";


const getDataCharacters = async () : Promise<Character[]> => {
    let allCharacters: Character[] = [];
    let nextPageUrl = 'people/';

    while (nextPageUrl) {
        const { data } = await axiosStarWars.get(nextPageUrl);
        allCharacters = [...allCharacters, ...data.results];
        nextPageUrl = data.next;
    }

    return allCharacters;
};

export const useCharacters = () => {
    const { setCharacters, setLoading, setError } = useCharactersStore();

    const { data, isSuccess, isLoading, error } = useQuery<Character[], Error>({
        queryKey: ['characters'],
        queryFn: getDataCharacters,
    });

    useEffect(() => {

        if(isSuccess) {
            setCharacters(data);
        }

        if(error){
            setError(error.message)
        }
    }, [isSuccess, data, error, setCharacters, setError]);



    return { data,isSuccess, isLoading, error, setLoading };
};