import React from 'react';
import styles from './index.module.scss';
import {NavLink} from "react-router-dom";
import {routesEnum} from "../../app/routes/routesEnum";
import logo from '../../assets/images/Logo.png';
import LinkNav from "../LinkNav";

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logoBox}>
                <img src={logo} alt="Логотип Star Wars"/>
            </div>
            <div className={styles.boxLinksNav}>
                <LinkNav to={routesEnum.HOME} textTo="Home"/>
                <LinkNav to={routesEnum.CHARACTERS} textTo="Characters"/>
            </div>
        </nav>
    );
}

export default Navbar;