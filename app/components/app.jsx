import React from "react";
import { Link } from 'react-router'
import Header from "components/header"

export default class App extends React.Component {
  render() {
    return (
      <div className="page">
        <Header />
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/setup">Setup</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
        </ul>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}