import { useState } from 'react';
import st from './Copy.module.scss';

function Copy({ placeholder, value=''}) {
    const [inputValue, setInputValue] = useState(value);
    return (
        <div className={ st['wrapper'] } >
            <textarea disabled className={ st['textarea'] } type="text" 
                placeholder={ placeholder }
                value={ inputValue }
                onChange={ (e) => setInputValue(e.target.value) }/>
            <button className={ st['btn'] } >Copy</button>
        </div>
    );
}

export default Copy;
