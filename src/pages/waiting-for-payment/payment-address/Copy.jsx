import { createRef, useState } from 'react';
import st from './Copy.module.scss';

function Copy({ placeholder, value = '' }) {
    const [inputValue, setInputValue] = useState(value);
    const [success, setSuccess] = useState(false);
    return (
        <div className={ st['wrapper'] }>
            <textarea className={ st['textarea'] } type="text" 
                placeholder={ placeholder }
                value={ inputValue }
                onChange={ (e) => setInputValue(e.target.value) }/>
            <button onClick={ () => {
                navigator.clipboard.writeText(inputValue);
                setSuccess(true);
            } } className={ st['btn'] }>Copy</button>
            { success && <div className={ st['success'] }>Код успешно скопирован!</div> }
        </div>
    );
}

export default Copy;
