import styles from './index.module.scss';
import error404 from '../../app/images/error404.png'
import ButtonLink from "../../shared/ButtonLink";
import {routesEnum} from "../../app/routes/routesEnum";
const Error = () => {
    return (
        <div className={styles.errorPage}>
            <div className="">
                <img src={error404} alt=""/>
            </div>
            <div className={styles.btnBox}>
        <ButtonLink colorBtn="greenBtn" to={routesEnum.HOME}>Return</ButtonLink>
            </div>

        </div>
    );
}

export default Error;