import styles from './index.module.scss';
import React from 'react';

const Loader = () => {
    return (
        <div className={styles.loaderBox}>
            <div className={styles.loader}>
                <h4>Загрузка данных... <br/>
                    Ожидайте, пожалуйста :)
                </h4>
            </div>
        </div>

    );
}

export default Loader;