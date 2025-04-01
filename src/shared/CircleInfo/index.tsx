import styles from './index.module.scss';

interface CircleInfoProps {
    infoName: string;
    infoValue: string | number;
}

function CircleInfo({infoName, infoValue}: CircleInfoProps) {

    if(infoValue==="unknown") {
        return <></>;
    }

    return (
        <div className={styles.elInfoPers}>
            <span className={styles.infoValue}>{infoValue}</span>
            <span className={styles.infoName}>{infoName}</span>
        </div>
    );
}

export default CircleInfo;