import { useState } from 'react';
import Address from '../../components/address/Address';
import Amount from '../../components/amount/Amount';
import Button from '../../components/button/Button';
import HeaderSmall from '../../components/header-small/HeaderSmall';
import InputContainer from '../../components/inputs-container/InputContainer';
import Template from '../../components/template/Template';
import Comment from './Comment';
import ProvidedEmail from './ProvidedEmail';
import st from './Refund.module.scss';

function Refund() {
    const [isActiveChoice, setIsActiveChoice] = useState(true);
    return (
        <Template Header={ () => (<>
            <HeaderSmall invoice='123456'>Refund</HeaderSmall>
        </>) } Content={ () => (<>
        <section className={ st['input-container-wrapper'] }>
            <InputContainer label='Select the amount which you want to recieve'>
                <div className={ st['select-amount-content'] }>
                    <section className={ st['amount'] }
                         onClick={ () => setIsActiveChoice(isActiveChoice ? isActiveChoice : !isActiveChoice) }>
                        <Amount secondLine='Refund of overpayment' active={ isActiveChoice }>0.00022 BTC</Amount></section>
                    <section className={ st['amount'] }
                        onClick={ () => setIsActiveChoice(isActiveChoice ? !isActiveChoice : isActiveChoice) }>
                        <Amount secondLine='Full refund' active={ !isActiveChoice }>0.002421</Amount></section>
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
                <Comment placeholder='Comment' /></InputContainer>
        </section>
        <section className={ st['provided-email-wrapper'] }>
            <ProvidedEmail>
                Your provided email: <a href="mailto:bla@bla.com">bla@bla.com</a><br />
                Refunds are made according to the terms of the store
            </ProvidedEmail>
        </section>
        </>) } ButtonsBox={ () => (<>
            <Button>Back</Button>
            <Button accent>Refund</Button>
        </>) }/>
    );
}

export default Refund;
