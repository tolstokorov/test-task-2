import st from './Title.module.scss';

function Title({ children }) {
  return (
    <div className={ st.title }>{ children }</div>
  );
}

export default Title;
