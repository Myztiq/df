import React from "react";
import { Link } from 'react-router'

export default class Greeting1 extends React.Component {
  render() {
    return <div>Greeting1 {this.props.name}
      <br/>
      <Link to="/inbox/messages/Ryan">Say Hi to Ryan</Link>
      <br/>
      <Link to="/inbox/messages/Sammy">Say Hi to Sammy</Link>
      <br/>
      {this.props.children || "Default Greeting"}
    </div>;
  }
}