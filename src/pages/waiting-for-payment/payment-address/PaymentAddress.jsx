import { useEffect, useState } from 'react';
import Button from '../../../components/button/Button';
import HeaderSmall from '../../../components/header-small/HeaderSmall';
import InputContainer from '../../../components/inputs-container/InputContainer';
import Template from '../../../components/template/Template';
import Attention from './Attention';
import Copy from './Copy';
import Eyebrow from './eyebrow/Eyebrow';
import Memo from './Memo';
import st from './PaymentAddress.module.scss';
import qrCode from './qr.png';
import Transaction from './Transaction';

function PaymentAddress() {
  const [show, setShow] = useState(false);
  const stop = () => setShow(false);
  useEffect(() => {
    setTimeout(() => setShow(true), 5000);
  }, []);
  return (
    <>
      { show && <Eyebrow stop={ stop }>The exchange rate has changed, the payment amount is 0,026 BTC</Eyebrow> }
      <Template Header={ () => (<>
          <HeaderSmall invoice='123456'>Waiting for payment</HeaderSmall>
      </>) } Content={ () => (<>
          <Transaction
            currency='BTC'
            currencyValue='0.0256'
            dollarValue='1 393'
            equivalent='54 500'
          />
          <Attention>The transaction will time out at <strong>12:56</strong></Attention>
          <div className={ st['memo-box-1'] }>
            <Memo>If the exchange rate changes more than 2%, the amount will be recalculated</Memo>
          </div>
          <div className={ st['box'] }>
            <div><InputContainer label='Payment address'>
              <div className={ st['memo-box-2'] }>
                <Memo>Pay in one or several transactions</Memo>
              </div>
              <Copy placeholder='TODO:_add_placeholder' value='bc1qdjs9zfaayn394u2mnntkrhpvrdjfszcwnam4d6'/>
            </InputContainer></div>
            <div><img src={ qrCode } alt="qr-code" width={ 106 } height={ 106 }/></div>
          </div>
          <InputContainer label='Payment status'>
            <div className={ st['status-text'] }>Received 0.012 BTC (47%)...</div>
          </InputContainer>
      </>) } ButtonsBox={ () => (<>
          <Button anchor>Return to store site</Button>
          <Button>Cancel and refund</Button>
      </>) }/>
    </>
  );
}

export default PaymentAddress;
