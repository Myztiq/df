import React from "react";

export default class customGreeting extends React.Component {
  render() {
    return <div>Hello!! {this.props.params.id}</div>;
  }
}