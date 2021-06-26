import Button from '../../../components/button/Button';
import Invoice from '../../../components/invoice/Invoice';
import Logo from '../../../components/logo/Logo';
import InputContainer from '../../../components/inputs-container/InputContainer';
import Address from '../../../components/address/Address';
import Title from '../../../components/title/Title';
import st from './Currency.module.scss';
import Amount from '../../../components/Amount/Amount';
import Btc from './btc/Btc';
import Eth from './eth/Eth';
import Ton from './ton/Ton';
import Usdt from './usdt/Usdt';

function Currency() {
  return (
    <div className={ st['currency'] }>
        <div className={ st['top-wrapper'] }>
            <div>
                <section className={ st['invoice '] }>
                    <Invoice>Invoice #123456</Invoice></section>
                <section className={ st['title'] }>
                    <Title>Payment to store.com</Title></section>
            </div>
            <section className={ st['logo'] }>
                <Logo width={ 48 } height={ 48 }/></section>
        </div>
        <section className={ st['select-wrapper'] }>
            <InputContainer label='Select the cryptocurrency for payment'>
                <div className={ st['select-amount-content'] }>
                    <section>
                        <Amount gap={ 18 } secondLine='0.002421' active>
                            <Btc />
                        </Amount></section>
                    <section>
                        <Amount gap={ 18 } secondLine='0.745642'>
                            <Eth />
                        </Amount></section>
                    <section>
                        <Amount gap={ 18 } secondLine='1 876.874' active>
                            <Ton />
                        </Amount></section>
                    <section>
                        <Amount gap={ 18 } secondLine='1 324.86'>
                            <Usdt />
                        </Amount></section>
                </div>
            </InputContainer>
        </section>
        <section className={ st['input-container-wrapper'] }>
            <InputContainer label='Email to receive a receipt'>
                <Address placeholder='Email' />
            </InputContainer>
        </section>
        <section className={ st['button-box'] }>
            <Button anchor>Return to store site</Button>
            <Button accent>Continue</Button>
        </section>
    </div>
  );
}

export default Currency;
