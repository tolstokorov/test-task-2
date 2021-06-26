import st from './Transaction.module.scss';

function Transaction({ currency, currencyValue, dollarValue, equivalent }) {
  return (
    <div className={ st['transaction-box'] }>
      <div>
        <div className={ st['currency-value'] }>{ currencyValue } { currency }</div>
        <div className={ st['dollar-value'] }>${ dollarValue }</div>
      </div>
      <div>
        <div className={ st['inner'] }>
          <span className={ st['equivalent'] }>1 { currency } = { equivalent }$</span>
          <span className={ st['loader'] }></span>
        </div>
      </div>
    </div>
  );
}

export default Transaction;
