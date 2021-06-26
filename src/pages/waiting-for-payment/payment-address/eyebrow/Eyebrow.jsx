import st from './Eyebrow.module.scss';
import clock from './clock.svg';
import x from './x.svg';

function Eyebrow({ children, stop }) {
  return (
    <div className={ st['eyebrow'] }>
      <span>{/* DO NOT REMOVE SPAN!!! */}</span>
      <div className={ st['inner'] }><img src={ clock } alt="clock" />{ children }</div>
      <img  className={ st['x'] }src={ x } alt="x" onClick={ stop } />
    </div>
  );
}

export default Eyebrow;
