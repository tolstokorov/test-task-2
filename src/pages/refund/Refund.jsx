import Button from '../../components/button/Button';
import Invoice from '../../components/invoice/Invoice';
import Logo from '../../components/logo/Logo';
import InputContainer from '../../components/inputs-container/InputContainer';
import Title from '../../components/title/Title';
import st from './Refund.module.scss';
import Amount from '../../components/Amount/Amount';
import Address from '../../components/address/Address';
import Comment from './Comment';
import ProvidedEmail from './ProvidedEmail';

function Refund() {
  return (
    <div className={ st['time-out'] }>
        <div className={ st['top-wrapper'] }>
            <div>
                <section className={ st['invoice '] }>
                    <Invoice>Invoice #123456</Invoice></section>
                <section className={ st['title'] }>
                    <Title>Refund </Title></section>
            </div>
            <section className={ st['logo'] }>
                <Logo width={ 48 } height={ 48 }/></section>
        </div>
        <section className={ st['input-container-wrapper'] }>
            <InputContainer label='Select the amount which you want to recieve'>
                <div className={ st['select-amount-content'] }>
                    <section className={ st['amount'] }>
                        <Amount secondLine='Refund of overpayment' active>0.00022 BTC</Amount></section>
                    <section className={ st['amount'] }>
                        <Amount secondLine='Full refund'>0.002421</Amount></section>
                </div>
            </InputContainer>
        </section>
        <section className={ st['input-container-wrapper'] }>
            <InputContainer label='Receiver address'>
                <Address placeholder='Enter address...' rightText='Paste address' />
            </InputContainer>
        </section>
        <section className={ st['input-container-wrapper'] }>
            <InputContainer label='Comment'>
                <Comment placeholder='Comment' rightText='0/120'/></InputContainer>
        </section>
        <section className={ st['provided-email-wrapper'] }>
            <ProvidedEmail>
                Your provided email: <u>bla@bla.com</u><br />
                Refunds are made according to the terms of the store
            </ProvidedEmail>
        </section>
        <section className={ st['button-box'] }>
            <Button>Back</Button>
            <Button accent>Refund</Button>
        </section>
    </div>
  );
}

export default Refund;
