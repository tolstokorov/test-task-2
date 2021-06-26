import st from './CurrencyFrame.module.scss';

function CurrencyFrame({ logo, alt = '', children }) {
    return (
        <div className={ st['wrapper'] }>
            <img  className={ st['img'] }
                src={ logo } alt={ alt } width={ 20 } height={ 20 }/>
            <span>{ children }</span>
        </div>
    );
}

export default CurrencyFrame;
