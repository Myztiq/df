import React from "react";

export default class Error extends React.Component {
  render() {
    return <div>
      {this.props.message && <div class="error">{this.props.message}</div>}
    </div>;
  }
}