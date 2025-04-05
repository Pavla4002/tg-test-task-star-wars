import styles from './index.module.scss';
import React from 'react';

interface ErrorProps {
    message: string;
}

const Loader = (props: ErrorProps) => {
    const {message} = props;
    return (
        <div className={styles.errorBox}>
            <h4>{message}</h4>
        </div>
    );
}

export default Loader;