import React from "react";
import logo from "images/logo.png"
import { Link } from 'react-router'
import auth from "services/auth.js"

export default class Header extends React.Component {
  render() {
    var loggedIn = auth.loggedIn();

    var navbar = <ul className="nav navbar-nav pull-right">
      <li className="nav-item">
        <Link className="nav-link" to="/login">Login</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/register">Register</Link>
      </li>
    </ul>;
    if (loggedIn) {
      navbar = <ul className="nav navbar-nav pull-right">
        <li className="nav-item">
          <a className="nav-link" href="mailto:support@dreamforwardfinancial.com" target="_blank">Contact Us</a>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/logout">Logout</Link>
        </li>
      </ul>;
    }

    return <header id="header">
      <div className="container">
        <nav className="navbar navbar-dark">
          <a className="navbar-brand" href="/"><img src={logo} /></a>
          {navbar}
        </nav>
      </div>
    </header>;
  }
}