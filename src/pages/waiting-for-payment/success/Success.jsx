import Button from '../../../components/button/Button';
import HeaderSmall from '../../../components/header-small/HeaderSmall';
import Template from '../../../components/template/Template';
import downloadImg from './dl.svg';
import paymentImg from './payment.svg';
import st from './Success.module.scss';

function Success() {
  return (
    <Template Header={ () => (<>
        <HeaderSmall invoice='123456'>Success</HeaderSmall>
    </>) } Content={ () => (<>
        <section className={ st['content'] }>
            <div className={ st['thanks-for-payment'] }>
                <div>
                    <section className={ st['thanks-for-payment_title'] }>
                        Thank you for payment!</section>
                    <section className={ st['thanks-for-payment_text'] }>
                        Your order is now complete and you can<br />
                        safely close this window</section>
                </div>
                <section className={ st['thanks-for-payment_img'] }>
                    <img src={ paymentImg } alt="bill in bag"
                        width={ 60 } height={ 60 }/></section>
            </div>
            <div>
                <div className={ st['stripe'] }>
                    <span className={ st['key'] }>Status</span>
                    <span className={ st['value'] + ' ' + st['status-completed'] }>Completed</span>
                </div>
                <div className={ st['stripe'] }>
                    <span className={ st['key'] }>Invoice</span>
                    <span className={ st['value'] }>a7eb9bd-d412-4f48-8668-dc46068ef30d</span>
                </div>
                <div className={ st['stripe'] }>
                    <span className={ st['key'] }>Date & time</span>
                    <span className={ st['value'] }>Mar 23, 2021, 14:04 UTC</span>
                </div>
                <div className={ st['stripe'] }>
                    <span className={ st['key'] }>Exchange rate</span>
                    <span className={ st['value'] }>54 500 BTC/USD</span>
                </div>
            </div>
            <div className={ st['under-line'] }>
                <div className={ st['stripe']  + ' ' + st['total']}>
                    <span>Total</span>
                    <span>$1 393.00</span>
                </div>
                <div className={ st['stripe'] }>
                    <span></span>
                    <span className={ st['btc'] }>0.0256 BTC</span>
                </div>
            </div>
        </section>
    </>) } ButtonsBox={ () => (<>
        <Button>Refund</Button>
        <Button accent file href='TODO:_add_href'>
            <div className={ st['dl-box'] }>
                <img className={ st['dl-icon'] }
                    src={ downloadImg } alt="download icon" />Download receipt</div>
        </Button>
    </>) }/>
  );
}

export default Success;
