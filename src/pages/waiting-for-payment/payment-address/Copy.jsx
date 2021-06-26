import { useState } from 'react';
import st from './Copy.module.scss';

function Copy({ placeholder, value = '' }) {
    const [inputValue, setInputValue] = useState(value);
    const [success, setSuccess] = useState();
    return (
        <div className={ st['wrapper'] }>
            <textarea disabled className={ st['textarea'] } type="text" 
                placeholder={ placeholder }
                value={ inputValue }
                onChange={ (e) => setInputValue(e.target.value) }/>
            <button onClick={ () => setSuccess(true) } className={ st['btn'] }>Copy</button>
            { success && <div className={ st['success'] }>Код успешно скопирован!</div> }
        </div>
    );
}

export default Copy;
