import styles from "./index.module.scss";
import {useCharacters} from "../../services";
import ListCharacters from "../../components/ListCharacters";

import Loader from "../../components/Loader";
import React, {useState} from "react";
import Pagination from "../../components/Pagination";
import EyeColorSelect from "../../components/FilterData";

import {useForm} from "react-hook-form";


type FormValues = {
    eye_color: string;
};

const Characters = () => {
    const { data, isLoading, error } = useCharacters();

    const { control, watch } = useForm<FormValues>({
        defaultValues: {
            eye_color: 'All',
        },
    });

    const selectedEyeColor = watch('eye_color');

    const [currentPage, setCurrentPage] = useState<number>(1);

    const itemsPerPage = 9;
    const characters = data || [];

    const filteredCharacters  = selectedEyeColor === 'All'
        ?  characters
        : characters.filter((character) => character.eye_color === selectedEyeColor);

    const indexOfLastCharacter = currentPage * itemsPerPage;
    const indexOfFirstCharacter = indexOfLastCharacter - itemsPerPage;
    const currentCharacters = filteredCharacters!.slice(indexOfFirstCharacter, indexOfLastCharacter);


    let changePage = (page: number) =>{
        setCurrentPage(page);
    }

    if (isLoading) {
        return <Loader /> ;
    }

    if (error) {
        return <div>Error loading data: {error.message}</div>;
    }

    return (
        <div className={styles.charactersPage}>
            <div className={styles.langBox}>
                {/*Пока что просто текст*/}
                language: en
            </div>
            {isLoading ? <Loader /> :
                <>
                    <div className={styles.titleCharactersList}>
                        <h1><strong>{data ? data.length : 'Some'} Peoples</strong> for you to choose your <strong>favorite</strong></h1>
                    </div>
                    <div className="">
                        <EyeColorSelect control={control} />
                    </div>
                    <div>
                        {currentCharacters!==undefined && <ListCharacters listCharacters={currentCharacters}/> }
                    </div>
                </>
            }
            <Pagination
                charactersLength={filteredCharacters.length}
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
                setCurrentPage={changePage}/>
        </div>
    );
}

export default Characters;