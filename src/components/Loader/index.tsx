import styles from './index.module.scss';
import React from 'react';

const Loader = () => {
    return (
        <div className={styles.loader}>
            <h4>Загрузка данных...</h4>
        </div>
    );
}

export default Loader;