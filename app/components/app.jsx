import React from "react";
import Header from "components/header"

export default class App extends React.Component {
  render() {
    return (
      <div className="page">
        <Header />
        <div className="container main-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}