import st from './InputContainer.module.scss';

function InputContainer({ label = 'no label', children }) {
  return (
    <div className={ st['input-container'] }>
        <section className={ st['label'] }>{ label }</section>
        <section className={ st['children'] }>{ children }</section>
    </div>
  );
}

export default InputContainer;
