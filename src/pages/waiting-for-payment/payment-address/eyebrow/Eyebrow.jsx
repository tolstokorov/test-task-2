import st from './Eyebrow.module.scss';
import clock from './clock.svg';

function Eyebrow({ children }) {
  return (
    <div className={ st['eyebrow'] }>
        <div className={ st['inner'] }><img src={ clock } alt="clock" />{ children }</div>
    </div>
  );
}

export default Eyebrow;
