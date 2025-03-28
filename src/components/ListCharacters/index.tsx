import React from 'react';
import {Character} from "../../types/characters";
import CardCharacter from "../CardCharacter";

interface CharactersList {
    listCharacters: Character[];
}

function ListCharacters({listCharacters}: CharactersList) {
    return (
        <div>
            {
                listCharacters.map((character, index)=> <CardCharacter key={`char_${index}`} dataCharacter={character}/>)
            }
        </div>
    );
}

export default ListCharacters;