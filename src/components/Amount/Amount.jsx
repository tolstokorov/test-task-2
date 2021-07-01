import st from './Amount.module.scss';

function Amount({ children, secondLine, active, gap = 0 }) {
  const style = st['amount'] + ' ' + (active ? st['active'] : st['non-active']);
  return (
    <div className={ style }>
      <div className={ st['firstLine'] } style={ { marginBottom: gap + 'px'} } >{ children }</div>
      <div>{ secondLine }</div>
    </div>
  );
}

export default Amount;
