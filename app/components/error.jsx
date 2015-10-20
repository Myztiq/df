import React from "react";

export default class Error extends React.Component {
  render() {
    console.log(this.props.error);
    return <div className = "errorMessage">
      {this.props.error && <div className="error">{this.props.error.message || this.props.error}</div>}
    </div>;
  }
}