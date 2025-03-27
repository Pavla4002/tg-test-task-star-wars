import styles from './index.module.scss';
import {NavLink} from "react-router-dom";

interface LinkProps {
    to: string;
    textTo: string;
}

function LinkNav({to, textTo}: LinkProps) {
    return (
        <NavLink to={to} className={({isActive}) => isActive ? styles.active : ''}>
            {textTo}
        </NavLink>
    );
}

export default LinkNav;