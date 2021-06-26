import Logo from '../logo/Logo';
import Title from '../title/Title';
import st from './HeaderBig.module.scss';

function HeaderBig({ children = 'no title' }) {
  return (
    <div className={ st['header'] }>
        <section className={ st['logo'] }>
            <Logo width={ 64 } height={ 64 }/></section>
        <section className={ st['title'] }>
            <Title>{ children }</Title></section>
    </div>
  );
}

export default HeaderBig;
