import React from "react";
import logo from "images/logo.png"
import { Link } from 'react-router'

export default class Header extends React.Component {
  render() {
    return <header id="header">
      <div className="container">
        <nav className="navbar navbar-dark">
          <a className="navbar-brand" href="/"><img src={logo} /></a>
          <ul className="nav navbar-nav pull-right">
            <li className="nav-item active">
              <Link className="nav-link" to="/dashboard">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">Register</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/setup">Dashboard</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>;
  }
}