import styles from './index.module.scss';
import {NavLink} from "react-router-dom";

interface LinkProps {
    to: string;
    textTo: string;
}

const LinkNav = (props: LinkProps) => {
    const {to, textTo} = props;
    return (
        <NavLink to={to} className={({isActive}) => isActive ? styles.active : ''}>
            {textTo}
        </NavLink>
    );
}

export default LinkNav;