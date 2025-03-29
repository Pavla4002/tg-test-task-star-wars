import styles from "./index.module.scss";
import {useCharacters} from "../../app/hooks";
import ListCharacters from "../../components/ListCharacters";

function Characters() {
    const { data,isSuccess, isLoading, error } = useCharacters();

    if (isLoading) {
        console.log('loading')
    }

    if (error) {
        console.log(error.message)
    }

    return (
        <div className={styles.charactersPage}>
            <div className={styles.langBox}>
                {/*Пока что просто текст*/}
                language: en
            </div>
            <div className={styles.titleCharactersList}>
                <h1><strong>{data ? data.length : 'Some'} Peoples</strong> for you to choose your <strong>favorite</strong></h1>
            </div>
            <div className="">
                {isLoading && <div>Загрузка...</div>}
                {data ? <ListCharacters listCharacters={data}/> : <div>Нет данных</div> }
            </div>
        </div>
    );
}

export default Characters;