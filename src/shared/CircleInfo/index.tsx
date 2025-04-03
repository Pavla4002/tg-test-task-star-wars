import styles from './index.module.scss';

interface CircleInfoProps {
    infoName: string;
    infoValue: string | number;
}

const CircleInfo = ({infoName, infoValue}: CircleInfoProps) => {

    console.log(infoValue)
    console.log(infoName)
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