import React from "react";
import createBrowserHistory from 'history/lib/createBrowserHistory';
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute } from 'react-router'
import auth from 'services/auth'


import App from "components/app.jsx";
import Login from "components/login.jsx";
import Register from "components/register.jsx";

import Greeting from "components/greeting.jsx";
import Greeting1 from "components/greeting1.jsx";
import CustomGreeting from "components/customGreeting.jsx"
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

ReactDOM.render((
  <Router history={createBrowserHistory()}>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard} onEnter={requireAuthentication}  />
      <Route path="login" component={Login} onEnter={redirectIfAuthenticated} />
      <Route path="register" component={Register} onEnter={redirectIfAuthenticated} />
      <Route path="dashboard" component={Greeting1} onEnter={requireAuthentication} />
      <Route path="setup" component={Greeting1} onEnter={requireAuthentication} >
        <Route path="messages/:id" component={CustomGreeting} />
      </Route>
    </Route>
  </Router>
), document.getElementById('main'));