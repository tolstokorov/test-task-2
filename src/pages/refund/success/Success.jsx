import Button from '../../../components/button/Button';
import HeaderBig from '../../../components/header-big/HeaderBig';
import Paragraph from '../../../components/paragraph/Paragraph';
import Template from '../../../components/template/Template';

function Success() {
  return (
    <Template aloneBtn Header={ () => (<>
        <HeaderBig>Refund request sent successfully</HeaderBig>
    </>) } Content={ () => (<>
        <Paragraph>if the seller has not returned the funds to you within 3 days - write to him at <a href="mailto:contact@prodavtsa.ru">contact@prodavtsa.ru</a></Paragraph>
    </>) } ButtonsBox={ () => (<>
        <Button>Close</Button>
    </>) }/>
  );
}

export default Success;
