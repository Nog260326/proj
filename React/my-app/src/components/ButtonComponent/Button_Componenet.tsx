import './Button_Componenet.css';
import { FC, useState } from 'react';
import './page2';

interface buttonProps{
    value: number
}

export const Button_Componenet: FC<buttonProps> = (props) => {
    const [value, setValue] = useState(props.value);
    function handleClick(){
        setValue(5);
    }
    return(
        <button className='button' onClick={handleClick}>
            Change: {value}
        </button>
    );
}

// export default Button_Componenet;