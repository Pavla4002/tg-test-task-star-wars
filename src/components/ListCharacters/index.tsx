import React from 'react';
import {Character} from "../../types/characters";
import CardCharacter from "../CardCharacter";
import styles from './index.module.scss'

interface CharactersList {
    listCharacters: Character[];
}

function ListCharacters({listCharacters}: CharactersList) {
    return (
        <div className={styles.list}>
            {
                listCharacters.map((character, index)=> <CardCharacter key={`char_${index}`} dataCharacter={character}/>)
            }
        </div>
    );
}

export default ListCharacters;