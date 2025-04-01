import styles from "./index.module.scss";
import {useCharacters} from "../../app/hooks";
import ListCharacters from "../../components/ListCharacters";
import ModalWindow from "../../components/ModalWindow";
import Loader from "../../shared/Loader";
import {useState} from "react";

function Characters() {
    let [page, setPage] = useState<number>(1);

    const { data, isSuccess, isLoading, error } = useCharacters(page);

    const handleNextPage = () => {
        if (data?.next) {
            setPage(page + 1);
        }
    };

    const handlePrevPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    return (
        <div className={styles.charactersPage}>
            <div className={styles.langBox}>
                {/*Пока что просто текст*/}
                language: en
            </div>
            {isLoading ? <Loader /> :
                <>
                    <div className={styles.titleCharactersList}>
                        <h1><strong>{data ? data.characters.length : 'Some'} Peoples</strong> for you to choose your <strong>favorite</strong></h1>
                    </div>
                    <div className="">
                        {data!==undefined && <ListCharacters listCharacters={data.characters}/> }
                    </div>
                </>
            }
            <div className="">
            {/*    Пагинация*/}
                <button onClick={handlePrevPage} disabled={page === 1}>
                    Prev
                </button>
                <button onClick={handleNextPage} disabled={!data?.next}>
                    Next
                </button>
            </div>
        </div>
    );
}

export default Characters;