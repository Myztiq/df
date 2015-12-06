import React from "react";
import logo from "images/logo.png"
import { Link } from 'react-router'
import auth from "services/auth.js"

export default class extends React.Component {
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

        <li className="nav-item dropdown">
          <a className="nav-link" data-toggle="dropdown" href="#">
            My 401(k) Plan
          </a>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">Dashboard</a>
            <a className="dropdown-item" href="#">Change Investments</a>
            <a className="dropdown-item" href="#">Account Performance and History</a>
            <a className="dropdown-item" href="#">Account Statements and Documents</a>
          </div>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link" data-toggle="dropdown" href="#">
            I need Help
          </a>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">How do I afford retirement</a>
            <a className="dropdown-item" href="#">I'm worried about the stock market</a>
            <a className="dropdown-item" href="#">I have questions about finance terms</a>
            <a className="dropdown-item" href="#">View Full Knowledge Center</a>
          </div>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link" data-toggle="dropdown" href="#">
            Documents & Customer Service
          </a>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">Accounts statements and legal docs</a>
            <a className="dropdown-item" href="#">Tax information</a>
            <a className="dropdown-item" href="#">Rollover/consolidate old accounts</a>
            <a className="dropdown-item" href="#">Loans & withdrawals</a>
            <a className="dropdown-item" href="#">How do fees work?</a>
            <a className="dropdown-item" href="#">Change my contact information</a>
            <a className="dropdown-item" href="#">Change your beneficiary</a>
            <Link className="dropdown-item" to="/logout">Logout</Link>
          </div>
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