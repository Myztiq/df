import React from "react";

export default class extends React.Component {
  render() {
    if (!this.props.error) {
      return <div/>;
    }
    return <div className = "errorMessage">
      <div className="error">{this.props.error.message || this.props.error}</div>
    </div>;
  }
}