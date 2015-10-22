import 'css/index.scss';

import React from "react";
import createBrowserHistory from 'history/lib/createBrowserHistory';
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute } from 'react-router'
import auth from 'services/auth'


import App from "components/layout/app.jsx";
import Login from "components/authentication/login.jsx";
import Register from "components/authentication/register.jsx";
import Background from "components/setup/background.jsx";
import CheckupResults from "components/setup/checkupResults.jsx";
import InvestmentMix from "components/setup/investmentMix.jsx";
import VerifyEmail from "components/authentication/verifyEmail.jsx"

import Dashboard from "components/dashboard.jsx"


function requireAuthentication(nextState, replaceState, cb) {
  auth.loggedIn()
    .then(function (loggedIn) {
      if (!loggedIn) {
        replaceState({ nextPathname: nextState.location.pathname }, '/login');
      }
    })
    .catch(function () {
      replaceState({ nextPathname: nextState.location.pathname }, '/login');
    })
   .finally(cb);
}
function requireUnauthenticated(nextState, replaceState, cb){
  auth.loggedIn()
    .then(function (loggedIn) {
      if (loggedIn) {
        replaceState({ nextPathname: nextState.location.pathname }, '/dashboard');
      }
    })
    .catch(function (err) {
      replaceState({ nextPathname: nextState.location.pathname }, '/error');
      console.log('Err', err)
    })
    .finally(cb);
}
function requireVerifiedEmail(nextState, replaceState, cb){
  auth.getUser()
    .then(function (user) {
      if (!user.emailVerified) {
        replaceState({ nextPathname: nextState.location.pathname }, '/verify-email');
      }
    })
    .catch(function (err) {
      replaceState({ nextPathname: nextState.location.pathname }, '/error');
      console.log('Err', err);
    })
    .finally(cb);
}

function requireSetupCompletion(nextState, replaceState, cb){
  auth.getUser()
    .then(function (user) {
      if (!user.setup) {
        replaceState({ nextPathname: nextState.location.pathname }, '/setup/background');
      }
    })
    .catch(function (err) {
      replaceState({ nextPathname: nextState.location.pathname }, '/error');
      console.log('Err', err);
    })
    .finally(cb);
}

function logout(nextState, replaceState){
  auth.logout();
  replaceState({ nextPathname: nextState.location.pathname }, '/login');
}

ReactDOM.render((
  <Router history={createBrowserHistory()}>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard} onEnter={requireAuthentication}  />
      <Route onEnter={requireUnauthenticated}>
        <Route path="login" component={Login}/>
        <Route path="register" component={Register}/>
      </Route>
      <Route onEnter={requireAuthentication}>
        <Route path="logout" onEnter={logout} />
        <Route path="verify-email" component={VerifyEmail}/>
        <Route onEnter={requireVerifiedEmail}>
          <Route path="dashboard" component={Dashboard} onEnter={requireSetupCompletion} />
          <Route path="setup">
            <Route path="background" component={Background} />
            <Route path="checkupResults" component={CheckupResults} />
            <Route path="investmentMix" component={InvestmentMix} />
          </Route>
        </Route>
      </Route>
    </Route>
  </Router>
), document.getElementById('main'));