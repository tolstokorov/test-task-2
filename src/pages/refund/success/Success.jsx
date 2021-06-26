import Button from '../../../components/button/Button';
import Logo from '../../../components/logo/Logo';
import Paragraph from '../../../components/paragraph/Paragraph';
import Title from '../../../components/title/Title';
import st from './Success.module.scss';

function Success() {
  return (
    <div className={ st['success'] }>
        <section className={ st['logo'] }>
            <Logo width={ 64 } height={ 64 }/></section>
        <section className={ st['title'] }>
            <Title>Refund request sent successfully</Title></section>
        <section className={ st['paragraph'] }>
            <Paragraph>if the seller has not returned the funds to you within 3 days - write to him at <u>contact@prodavtsa.ru</u></Paragraph></section>
        <section className={ st['button-box'] }>
            <Button>Close</Button>
        </section>
    </div>
  );
}

export default Success;
