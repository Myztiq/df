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

import Dashboard from "components/dashboard.jsx"


function requireAuthentication(nextState, replaceState) {
  if (!auth.loggedIn()) {
    replaceState({ nextPathname: nextState.location.pathname }, '/login');
  }
}
function redirectIfAuthenticated(nextState, replaceState){
  if (auth.loggedIn()) {
    replaceState({ nextPathname: nextState.location.pathname }, '/dashboard');
  }
}

function logout(nextState, replaceState){
  auth.logout();
  replaceState({ nextPathname: nextState.location.pathname }, '/login');
}

ReactDOM.render((
  <Router history={createBrowserHistory()}>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard} onEnter={requireAuthentication}  />
      <Route path="logout" onEnter={logout} />
      <Route path="login" component={Login} onEnter={redirectIfAuthenticated} />
      <Route path="register" component={Register} onEnter={redirectIfAuthenticated} />
      <Route path="dashboard" component={Dashboard} onEnter={requireAuthentication} />
      <Route path="setup">
        <Route path="background" component={Background} />
        <Route path="checkupResults" component={CheckupResults} />
        <Route path="investmentMix" component={InvestmentMix} />
      </Route>
    </Route>
  </Router>
), document.getElementById('main'));