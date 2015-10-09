import React from "react";

export default class Greeting extends React.Component {
  render() {
    return <div>Greeting {this.props.name}</div>;
  }
}