import React from "react";
import { Link } from 'react-router'

export default class extends React.Component {
  render() {
    return <div>
      <h1>401(K) Account Overview</h1>
      <p>overview!</p>

      <div className="btn btn-secondary" onClick={this.props.back}>Go Back</div>
    </div>;
  }
}