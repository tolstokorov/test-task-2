import Button from '../../components/button/Button';
import HeaderBig from '../../components/header-big/HeaderBig';
import Paragraph from '../../components/paragraph/Paragraph';
import Template from '../../components/template/Template';

function TimeOut() {
  return (
    <Template Header={ () => (<>
        <HeaderBig>Transaction timed out</HeaderBig>
    </>) } Content={ () => (<>
        <Paragraph>If you managed to send coins, click a refund to get them back</Paragraph>
    </>) } ButtonsBox={ () => (<>
        <Button>Close</Button>
        <Button accent>Refund</Button>
    </>) }/>
  );
}

export default TimeOut;
