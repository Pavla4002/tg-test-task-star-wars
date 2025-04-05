import styles from './index.module.scss'
import {Character} from "../../types/characters";
import TagColor from "../TagColor";
import useCharactersStore from "../../store/store";
import CircleInfo from "../CircleInfo";

interface CharacterInfo {
    dataCharacter: Character;
}

const CardCharacter = ({dataCharacter}:CharacterInfo) => {

    let {setModalOpen, setSelectCharacter} = useCharactersStore();

    function setCharacterAndModal () {
        setModalOpen(true);
        setSelectCharacter(dataCharacter);
    }

    return (
        <div className={styles.cardCharacter} onClick={() => setCharacterAndModal()}>
            <span className={styles.title}><b>{dataCharacter.name}</b></span>
            <div className={styles.infoBox}>
                <CircleInfo infoName={"height"} infoValue={dataCharacter.height} />
                <CircleInfo infoName={"mass"} infoValue={dataCharacter.mass} />
            </div>
            <div className={styles.tags}>
                <TagColor>{dataCharacter.gender}</TagColor>
                <TagColor color="blue">{dataCharacter.birth_year}</TagColor>
            </div>
        </div>
    );
}

export default CardCharacter;