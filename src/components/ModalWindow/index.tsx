import styles from './index.module.scss'
import useCharactersStore from "@/store/store";
import closeIcon from '@/assets/images/closeIcon.svg'
import TagColor from "../TagColor";
import hermaphrodite from '@/assets/images/hermaphrodite.png';
import IconMale from '@/assets/images/Iconmale.png';
import IconFemale from '@/assets/images/Iconfemale.png';
import idk from '@/assets/images/idk.png';
import CircleInfo from "../CircleInfo";


const ModalWindow = () => {
    let {selectCharacter, modalOpen, setModalOpen} = useCharactersStore();

    let img;
    if (selectCharacter!.gender==="male") {
        img = IconFemale;
    }else if (selectCharacter!.gender==="female"){
        img = IconMale;
    }else if (selectCharacter!.gender==="hermaphrodite") {
        img = hermaphrodite;
    }else{
        img = idk;
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
                    <div className={styles.infoPers}>
                        <p className={styles.namePers}>{selectCharacter!.name}</p>
                        <div className={styles.whiteBoxInfo}>
                            {selectCharacter!.hair_color !== "n/a" && selectCharacter!.hair_color !== "none"
                                ? <p>hair color: {selectCharacter!.hair_color}</p>
                                : ""
                            }
                            {selectCharacter!.skin_color !== "n/a" && selectCharacter!.skin_color !== "none"
                                ? <p>skin color - {selectCharacter!.skin_color}</p>
                                : ""
                            }
                            {selectCharacter!.eye_color !== "n/a" && selectCharacter!.eye_color !== "none"
                                ?   <p>eye color: {selectCharacter!.eye_color}</p>
                                : ""
                            }
                        </div>
                        <div className={styles.massHeight}>
                            { selectCharacter!.height!=='unknown' &&
                                <div className={styles.bgWhiteInfo}>
                                    <CircleInfo infoName={"height"} infoValue={selectCharacter!.height} />
                                </div>
                            }
                            { selectCharacter!.mass!=='unknown' &&
                                <div className={styles.bgWhiteInfo}>
                                    <CircleInfo infoName={"mass"} infoValue={selectCharacter!.mass} />
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalWindow;