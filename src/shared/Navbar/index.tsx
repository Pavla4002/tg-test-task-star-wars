import React from 'react';
import styles from './index.module.scss';
import {NavLink} from "react-router-dom";
import {routesEnum} from "../../app/routes/routesEnum";
import logo from '../../app/images/Logo.png';

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logoBox}>
                <img src={logo} alt="Логотип Star Wars"/>
            </div>
            <div className={styles.boxLinksNav}>
                <NavLink to={routesEnum.HOME} className={isActive =>
                    !isActive ? 'nnn' : `${styles.active}`
                }>
                    Home
                </NavLink>
                <NavLink to={routesEnum.CHARACTERS} className={isActive =>
                    !isActive ? 'nnn' : styles.active
                }>
                    Characters
                </NavLink>
            </div>
        </nav>
    );
}

export default Navbar;