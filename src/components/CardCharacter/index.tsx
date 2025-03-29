import styles from './index.module.scss'
import {Character} from "../../types/characters";

interface CharacterInfo {
    dataCharacter: Character;
}

function CardCharacter({dataCharacter}:CharacterInfo) {
    return (
        <div className={styles.cardCharacter}>
            <span className={styles.title}><b>{dataCharacter.name}</b></span>
            <div className={styles.infoBox}>
                <div>
                    <span className={styles.infoValue}>{dataCharacter.height}</span>
                    <span className={styles.infoName}>height</span>
                </div>
                <div className={styles.info}>
                    <span className={styles.infoValue}>{dataCharacter.mass}</span>
                    <span className={styles.infoName}>mass</span>
                </div>
            </div>
        </div>
    );
}

export default CardCharacter;