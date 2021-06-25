import st from './ProvidedEmail.module.scss';

function ProvidedEmail({ children }) {
  return (
    <p className={ st['provided-email'] }>
        { children }
    </p>
  );
}

export default ProvidedEmail;