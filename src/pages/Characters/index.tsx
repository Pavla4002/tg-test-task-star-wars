import styles from "./index.module.scss";
import {useCharacters} from "../../app/hooks";
import ListCharacters from "../../components/ListCharacters";
import ModalWindow from "../../components/ModalWindow";
import Loader from "../../shared/Loader";

function Characters() {
    const { data,isSuccess, isLoading, error } = useCharacters();


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
                        {data!==undefined && <ListCharacters listCharacters={data}/> }
                    </div>
                </>
            }

        </div>
    );
}

export default Characters;