import styles from "./index.module.scss";
import {string} from "zod";

interface TagProps {
    color?: 'blue' | 'green' | 'yellow' | 'purple';
    children: string;
}

function TagColor({color, children} : TagProps) {

    let colorTag: 'blue' | 'green' | 'yellow' | 'purple' | undefined;

    if (color && children!=='unknown') {
        colorTag = color;
    }else {
        switch (children) {
            case "female" :
                colorTag = 'purple'
                break;
            case "male" :
                colorTag = 'green'
                break;
            case "hermaphrodite" :
                colorTag = 'yellow'
                break;
            default:
                colorTag = undefined;
        }
    }

    if (!colorTag) {
        return null;
    }

    return (
        <div className={styles[colorTag + 'Btn']}>
            {children}
        </div>
    );
}

export default TagColor;