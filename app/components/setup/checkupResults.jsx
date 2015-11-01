import React from "react";

export default class extends React.Component {
  render() {
    return <div>
      <h1>Retirement Checkup Results</h1>
      <p>
        Based on your age and how much you've already saved, you need to
        save 10% of your paycheck in order to be able to retire comfortably.
      </p>
      <p>Next, you'll get to choose your investment mix.</p>
      <div className="btn btn-secondary" onClick={this.props.back}>Back</div>
      <div className="btn btn-primary" onClick={this.props.save}>Next</div>
    </div>;
  }
}