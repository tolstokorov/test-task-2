import st from './Attention.module.scss';
import attention from './attention.svg';

function Attention({ children }) {
  return (
    <div className={ st['attention'] }>
        <div className={ st['inner'] }>
            <img src={ attention } alt="attention" width={ 20 } height={ 20 } />
            <span>{ children }</span>
        </div>
    </div>
  );
}

export default Attention;
