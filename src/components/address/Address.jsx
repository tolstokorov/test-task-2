import { useState } from 'react';
import st from './Address.module.scss';

function Address({ placeholder, rightText }) {
  const [value, setValue] = useState('');
  return (
    <div className={ st['address'] }>
        <input onChange={ e => setValue(e.target.value) }
        className={ st['input'] + ' ' + (rightText ? st['input-with-right-text'] : '') }
        placeholder={ placeholder } value={ value }/>
        { !!rightText && <button onClick={ () => {
          navigator.clipboard.readText()
            .then(text => setValue(text));
        }}
          className={ st['right-text'] }>{rightText} </button> }
    </div>
  );
}

export default Address;