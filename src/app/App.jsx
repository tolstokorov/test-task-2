import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import WaitingForPaymentCurrency from '../pages/waiting-for-payment/currency/Currency';
import WaitingForPaymentPaymentAddress from '../pages/waiting-for-payment/payment-address/PaymentAddress';
import WaitingForPaymentSuccess from '../pages/waiting-for-payment/success/Success';
import WaitingForPaymentCancel from '../pages/waiting-for-payment/cancel/Cancel';

import Refund from '../pages/refund/Refund';
import RefundSuccess from '../pages/refund/success/Success';

import TimeOut from '../pages/time-out/TimeOut';

import Scene from '../components/scene/Scene';

import st from './App.module.scss';
import Template from "../components/template/Template";

function App() {
  return (
    <div className={ st['wrapper'] }>

      <Router>
        <Switch>
          <Route exact path="/">
            <ul>
              <li>
                waiting for payment
                <ul>
                  <li><Link to="/waiting-for-payment-currency">currency</Link></li>
                  <li><Link to="/waiting-for-payment-payment-address">payment address</Link></li>
                  <li><Link to="/waiting-for-payment-success">success</Link></li>
                  <li><Link to="/waiting-for-payment-cancel">cancel</Link></li>
                </ul>
              </li>
              <br />
              <li>
                refund
                <ul>
                  <li><Link to="/refund">refund</Link></li>
                  <li><Link to="/refund-success">success</Link></li>
                </ul>
              </li>
              <br />
              <li><Link to="/time-out">time-out</Link></li>
            </ul>
          </Route>

          <Route path="/waiting-for-payment-currency">
            <Scene><WaitingForPaymentCurrency /></Scene>
          </Route>
          <Route path="/waiting-for-payment-payment-address">
            <Scene><WaitingForPaymentPaymentAddress /></Scene>
          </Route>
          <Route path="/waiting-for-payment-success">
            <Scene><WaitingForPaymentSuccess /></Scene>
          </Route>
          <Route path="/waiting-for-payment-success">
            <Scene><WaitingForPaymentSuccess /></Scene>
          </Route>

          <Route path="/waiting-for-payment-success">
            <Scene><WaitingForPaymentSuccess /></Scene>
          </Route>
          <Route path="/waiting-for-payment-cancel">
            <Scene><WaitingForPaymentCancel /></Scene>
          </Route>

          <Route path="/refund">
            <Scene><Refund /></Scene>
          </Route>
          <Route path="/refund-success">
            <Scene><RefundSuccess /></Scene>
          </Route>

          <Route path="/time-out">
            <Scene><TimeOut /></Scene>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
