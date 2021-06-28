import { useState } from 'react';
import st from './Address.module.scss';

function Address({ placeholder, rightText }) {
  const [value, setValue] = useState('');
  return (
    <div className={ st['address'] }>
        <input className={ st['input'] }
        placeholder={ placeholder } value={ value }/>
        <button onClick={ () => {
          navigator.clipboard.readText()
            .then(text => setValue(text));
        }}
          className={ st['right-text'] }>{rightText} </button>
    </div>
  );
}

export default Address;