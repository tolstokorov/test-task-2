import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import TimeOut from '../pages/time-out/TimeOut';
import Success from '../pages/refund/success/Success';
import Refund from '../pages/refund/Refund';
import Cancel from '../pages/waiting-for-payment/cancel/Cancel';
import Scene from '../scene/Scene';

import st from './App.module.scss';

function App() {
  return (
    <div className={ st['wrapper'] }>

      <Router>
        <Switch>
          <Route exact path="/">
            <Link to="/time-out">time-out</Link><br />
            <Link to="/refund-success">refund success</Link><br />
            <Link to="/refund">refund</Link><br />
            <Link to="/waiting-for-payment-cancel">waiting-for-payment cancel</Link><br />
          </Route>
          <Route path="/time-out">
            <Scene><TimeOut /></Scene>
          </Route>
          <Route path="/refund-success">
            <Scene><Success /></Scene>
          </Route>
          <Route path="/refund">
            <Scene><Refund /></Scene>
          </Route>
          <Route path="/waiting-for-payment-cancel">
            <Scene><Cancel /></Scene>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
