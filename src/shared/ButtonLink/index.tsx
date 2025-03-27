import styles from './index.module.scss';
import {NavLink} from "react-router-dom";

interface ButtonProps {
    colorBtn: 'yellowBtn' | 'greenBtn';
    children: string;
    to: string;
}

function ButtonLink({colorBtn, children, to} : ButtonProps) {
    return (
        <div className={styles[colorBtn]}>
            <NavLink to={to}>{children}</NavLink>
        </div>
    );
}

export default ButtonLink;