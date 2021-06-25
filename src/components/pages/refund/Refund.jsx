import Button from '../../button/Button';
import Invoice from '../../invoice/Invoice';
import Logo from '../../logo/Logo';
import InputContainer from '../../inputs-container/InputContainer';
import Title from '../../title/Title';
import st from './Refund.module.scss';
import Amount from './Amount';
import Address from './Address';

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
                    <section className={ st['left-amount'] }>
                        <Amount firstLine='0.00022 BTC' secondLine='Refund of overpayment' active/></section>
                    <section className={ st['right-amount'] }>
                        <Amount firstLine='0.002421' secondLine='Full refund' /></section>
                </div>
            </InputContainer>
        </section>
        <section className={ st['input-container-wrapper'] }>
            <InputContainer label='Receiver address'>
                <Address placeholder='Enter address...' rightText='Paste address' />
            </InputContainer>
        </section>
        <section className={ st['input-container-wrapper'] }>
            <InputContainer label='Comment'>content</InputContainer>
        </section>
        <section>
            content
        </section>
        <section className={ st['button-box'] }>
            <Button>Back</Button>
            <Button accent>Refund</Button>
        </section>
    </div>
  );
}

export default Refund;
