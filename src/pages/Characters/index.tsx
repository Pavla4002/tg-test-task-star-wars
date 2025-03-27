import styles from "../Error/index.module.scss";

function Characters() {
    return (
        <div>
            <div className={styles.langBox}>
                language: en
            </div>
            <div className="">
                <h1><strong>60 Peoples</strong> for you to choose your <strong>favorite</strong></h1>
            </div>
        </div>
    );
}

export default Characters;