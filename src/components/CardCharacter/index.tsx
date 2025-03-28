import styles from './index.module.scss'
import {Character} from "../../types/characters";

interface CharacterInfo {
    dataCharacter: Character;
}

function CardCharacter({dataCharacter}:CharacterInfo) {
    return (
        <div className={styles.cardCharacter}>
            <span><b>{dataCharacter.name}</b></span>
        </div>
    );
}

export default CardCharacter;