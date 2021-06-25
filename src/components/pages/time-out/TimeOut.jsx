import Button from '../../button/Button';
import Logo from '../../logo/Logo';
import Paragraph from '../../paragraph/Paragraph';
import Title from '../../title/Title';
import st from './TimeOut.module.scss';

function TimeOut() {
  return (
    <div className={ st['time-out'] }>
        <section className={ st['logo'] }>
            <Logo width={ 64 } height={ 64 }/></section>
        <section className={ st['title'] }>
            <Title>Transaction timed out</Title></section>
        <section className={ st['paragraph'] }>
            <Paragraph>If you managed to send coins, click a refund to get them back</Paragraph></section>
        <section className={ st['button-box'] }>
            <Button>Close</Button>
            <Button accent>Refund</Button>
        </section>
    </div>
  );
}

export default TimeOut;
