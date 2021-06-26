import Address from '../../../components/address/Address';
import Amount from '../../../components/Amount/Amount';
import Button from '../../../components/button/Button';
import HeaderSmall from '../../../components/header-small/HeaderSmall';
import InputContainer from '../../../components/inputs-container/InputContainer';
import Template from '../../../components/template/Template';
import Btc from './btc/Btc';
import st from './Currency.module.scss';
import Eth from './eth/Eth';
import Table from './Table';
import Ton from './ton/Ton';
import Usdt from './usdt/Usdt';

function Currency() {
  return (
    <Template Header={ () => (<>
        <HeaderSmall invoice='123456'>Payment to store.com</HeaderSmall>
    </>) } Content={ () => (<>
        <section className={ st['wrapper'] }>
            <Table />
        </section>
        <section className={ st['wrapper'] }>
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
    </>) } ButtonsBox={ () => (<>
        <Button anchor>Return to store site</Button>
        <Button accent>Continue</Button>
    </>) }/>
  );
}

export default Currency;
