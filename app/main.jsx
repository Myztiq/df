import React from "react";
import createBrowserHistory from 'history/lib/createBrowserHistory';
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute } from 'react-router'


import App from "./components/app.jsx";
import Greeting from "./components/greeting.jsx";
import Greeting1 from "./components/greeting1.jsx";
import CustomGreeting from "./components/customGreeting.jsx"
import Dashboard from "./components/dashboard.jsx"


ReactDOM.render((
  <Router history={createBrowserHistory()}>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard} />
      <Route path="about" component={Greeting} />
      <Route path="inbox" component={Greeting1}>
        <Route path="messages/:id" component={CustomGreeting} />
      </Route>
    </Route>
  </Router>
), document.getElementById('main'));