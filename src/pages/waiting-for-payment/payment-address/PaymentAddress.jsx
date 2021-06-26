import Button from '../../../components/button/Button';
import HeaderSmall from '../../../components/header-small/HeaderSmall';
import Template from '../../../components/template/Template';

function PaymentAddress() {
  return (
    <Template Header={ () => (<>
        <HeaderSmall invoice='123456'>Waiting for payment</HeaderSmall>
    </>) } Content={ () => (<>
        content
    </>) } ButtonsBox={ () => (<>
        <Button anchor>Return to store site</Button>
        <Button>Cancel and refund</Button>
    </>) }/>
  );
}

export default PaymentAddress;
