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

    // const { data, isLoading, error } = useQuery<Character[], Error>(['characters'], fetchCharacters, {
    //     onSuccess: (data) => {
    //         setCharacters(data); // Сохранение данных в Zustand после успешного запроса
    //         setLoading(false); // Остановка загрузки
    //     }
    // });

};