import styles from './index.module.scss'
import {Character} from "../../types/characters";
import TagColor from "../../shared/TagColor";
import useCharactersStore from "../../store/store";

interface CharacterInfo {
    dataCharacter: Character;
}

function CardCharacter({dataCharacter}:CharacterInfo) {

    let {setModalOpen, setSelectCharacter} = useCharactersStore();

    function setCharacterAndModal () {
        setModalOpen(true);
        setSelectCharacter(dataCharacter);
    }

    return (
        <div className={styles.cardCharacter} onClick={() => setCharacterAndModal()}>
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
            <div className={styles.tags}>
                <TagColor>{dataCharacter.gender}</TagColor>
                <TagColor color="blue">{dataCharacter.birth_year}</TagColor>
            </div>
        </div>
    );
}

export default CardCharacter;