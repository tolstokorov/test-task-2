import st from './Amount.module.scss';

function Amount({ firstLine, secondLine, active }) {
  const style = st['amount'] + ' ' + (active ? st['active'] : st['non-active']);
  return (
    <div className={ style }>{ firstLine}<br />{ secondLine }</div>
  );
}

export default Amount;
