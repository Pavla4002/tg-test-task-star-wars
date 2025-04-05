import styles from './index.module.scss';
import {Link} from "react-router-dom";

interface ButtonProps {
    colorBtn: 'yellowBtn' | 'greenBtn';
    children: string;
    to: string;
}

const ButtonLink = ({colorBtn, children, to} : ButtonProps) => {
    return (
        <div className={styles[colorBtn]}>
            <Link to={to}>{children}</Link>
        </div>
    );
}

export default ButtonLink;