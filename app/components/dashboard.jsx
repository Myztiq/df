import React from "react";
import { Link } from 'react-router'

export default class extends React.Component {
  render() {
    return <div>
      Dashboard!

      <Link className="btn btn-primary" to="/setup">Setup</Link>
      <Link className="btn btn-primary" to="/login">Login</Link>
      <Link className="btn btn-primary" to="/register">Register</Link>
    </div>;
  }
}