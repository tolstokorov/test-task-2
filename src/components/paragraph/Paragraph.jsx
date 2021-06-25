import st from './Paragraph.module.scss';

function Paragraph({ children }) {
  return (
    <p className={ st.paragraph }>{ children }</p>
  );
}

export default Paragraph;
