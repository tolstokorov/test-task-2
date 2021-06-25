import st from './Address.module.scss';

function Address({ placeholder, rightText }) {
  return (
    <div className={ st['address'] }>
        <input className={ st['input'] }
        placeholder={ placeholder } />
        <span className={ st['right-text'] }>{rightText}</span>
    </div>
  );
}

export default Address;