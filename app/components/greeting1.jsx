import React from "react";
import { Link } from 'react-router'

export default class Greeting1 extends React.Component {
  render() {
    return <div>Greeting1 {this.props.name}
      <Link to="/inbox/messages/Ryan">Say Hi to Ryan</Link>
      <Link to="/inbox/messages/Sam">Say Hi to Sam</Link>
      {this.props.children || "Welcome to your Inbox"}
    </div>;
  }
}