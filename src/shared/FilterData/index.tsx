import { Controller } from 'react-hook-form';


interface EyeColorSelectProps {
    control?: any;
    errors?: any;
}

const eyeColors = ['All', 'brown', 'red', 'blue', 'white'];

const EyeColorSelect= ({ control, errors } : EyeColorSelectProps) => {
    return (
        <div>
            <label>Eye Color</label>
            <Controller
                name="eye_color"
                control={control}
                render={({ field }) => (
                    <select {...field}>
                        {eyeColors.map((color) => (
                            <option key={color} value={color}>
                                {color === 'all' ? 'All Eye Colors' : color}
                            </option>
                        ))}
                    </select>
                )}
            />
            {/*{errors.eye_color && <span>{errors.eye_color.message}</span>}*/}
        </div>
    );
};

export default EyeColorSelect;