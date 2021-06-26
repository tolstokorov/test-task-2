import st from './Memo.module.scss';

function Memo({ children }) {
  return (
    <p className={ st['memo'] }>{ children }</p>
  );
}

export default Memo;
