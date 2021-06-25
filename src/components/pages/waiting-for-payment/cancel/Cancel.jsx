
import Button from '../../../button/Button';
import Invoice from '../../../invoice/Invoice';
import Logo from '../../../logo/Logo';
import Paragraph from '../../../paragraph/Paragraph';
import Title from '../../../title/Title';
import st from './Cancel.module.scss';

function Cancel() {
  return (
    <div className={ st['cancel'] }>
        <div className={ st['top-wrapper'] }>
            <div>
                <section className={ st['invoice '] }>
                    <Invoice>Invoice #123456</Invoice></section>
                <section className={ st['title'] }>
                    <Title>Payment has been<br />canceled</Title></section>
            </div>
            <section className={ st['logo'] }>
                <Logo width={ 48 } height={ 48 }/></section>
        </div>
        <section className={ st['paragraph'] }>
            <Paragraph>If you have made any payments, click Refund to request the reimbursement</Paragraph></section>
        <section className={ st['button-box'] }>
            <Button>Back</Button>
            <Button accent>Refund</Button>
        </section>
    </div>
  );
}

export default Cancel;
