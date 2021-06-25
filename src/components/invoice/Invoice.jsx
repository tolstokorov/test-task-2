import st from './Invoice .module.scss';

function Invoice ({ children }) {
  return (
    <div className={ st['invoice '] }>{ children }</div>
  );
}

export default Invoice ;
