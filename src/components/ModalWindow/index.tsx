import styles from './index.module.scss'
import useCharactersStore from "../../store/store";
import closeIcon from '../../app/images/closeIcon.svg'
import TagColor from "../../shared/TagColor";
import hermaphrodite from '../../app/images/hermaphrodite.png';
import IconMale from '../../app/images/Iconmale.png';
import IconFemale from '../../app/images/Iconfemale.png';


function ModalWindow() {
    let {selectCharacter, modalOpen, setModalOpen} = useCharactersStore();
    let img;

    if (selectCharacter!.gender==="male") {
        img = IconFemale;
    }else if (selectCharacter!.gender==="female"){
        img = IconMale;
    }else{
        img = hermaphrodite;
    }

    function closeModal () {
        setModalOpen(!modalOpen);
    }

    return (
        <div className={styles.modalW}>
            <div className={styles.modalBox}>
                <button className={styles.closeBtn} onClick={closeModal}>
                    <img src={closeIcon} alt="close button"/>
                </button>
                <div className={styles.modalInfo}>
                    <div className={styles.imagePers}>
                        <img src={img} alt="mail"/>
                        <div className={styles.tagsBox}>
                            <TagColor>{selectCharacter!.gender}</TagColor>
                            <TagColor color="blue">{selectCharacter!.birth_year}</TagColor>
                        </div>
                    </div>
                    <div className={styles.infoPers}></div>
                </div>
            </div>
            {/*<p>{selectCharacter!.name}</p>*/}
        </div>
    );
}

export default ModalWindow;