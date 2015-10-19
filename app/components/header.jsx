import React from "react";
import logo from "images/logo.png"

export default class Header extends React.Component {
  render() {
    return <header id="header">
      <div className="container">
        <img src={logo} />
      </div>
    </header>;
  }
}