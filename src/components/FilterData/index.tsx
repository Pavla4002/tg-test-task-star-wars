import {Control, Controller} from 'react-hook-form';
import styles from './index.module.scss'


type ControlType = {
    eye_color: string
}

interface EyeColorSelectProps {
    control: Control<ControlType>;
}

const eyeColors = ['All', 'brown', 'red', 'blue', 'white'];

const EyeColorSelect= ({ control } : EyeColorSelectProps) => {
    return (
        <div>
            <label>color eye</label>
            <Controller
                name="eye_color"
                control={control}
                render={({ field }) => (
                    <select {...field} className={styles.filterSelect}>
                        {eyeColors.map((color) => (
                            <option key={color} value={color}>
                                {color === 'All' ? 'All' : color}
                            </option>
                        ))}
                    </select>
                )}
            />
        </div>
    );
};

export default EyeColorSelect;