import styles from './index.module.scss';
import banner from '@/assets/images/banner.png';
import {routesEnum} from "@/app/routes/routesEnum";
import ButtonLink from "@/components/ButtonLink";
const Home = () =>{
    return (
        <div className={styles.homePage}>
            <div className={styles.textContentHome}>
                <h1><strong>Find</strong> all your favorite <strong>character</strong></h1>
                <p>You can find out all the <br/> information about your favorite characters</p>
                <ButtonLink to={routesEnum.CHARACTERS} colorBtn="yellowBtn">See more...</ButtonLink>
            </div>
            <div className={styles.banner}>
                <img src={banner} alt="banner"/>
            </div>
        </div>
    );
}

export default Home;