import React from "react";
import { Link } from 'react-router'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Dreamforward Financial</h1>
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/setup">Setup</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}