import React from "react";
import Header from "components/layout/header"

export default class extends React.Component {
  render() {
    return (
      <div className="page">
        <Header />
        <div className="container main-content">
          {this.props.children}
        </div>
        <footer>
          <div className="container" style={{width: '100%'}}>
            © 2015 Dream Forward Financial
            <div className="pull-right">
              <a href="#">Contact Us</a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}