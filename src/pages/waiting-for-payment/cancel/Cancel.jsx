
import Button from '../../../components/button/Button';
import HeaderSmall from '../../../components/header-small/HeaderSmall';
import Paragraph from '../../../components/paragraph/Paragraph';
import Template from '../../../components/template/Template';

function Cancel() {
  return (
    <Template width={ 400 } Header={ () => (<>
        <HeaderSmall invoice='123456'>Payment has been<br />canceled</HeaderSmall>
    </>) } Content={ () => (<>
        <Paragraph>If you have made any payments, click Refund to request the reimbursement</Paragraph>
    </>) } ButtonsBox={ () => (<>
        <Button>Back</Button>
        <Button accent>Refund</Button>
    </>) }/>
  );
}

export default Cancel;
