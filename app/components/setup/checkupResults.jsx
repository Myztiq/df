import React from "react";
import { Link } from 'react-router'

export default class extends React.Component {
  render() {
    return <div>
      <h1>Retirement Checkup Results</h1>
      <p>Based on your age and how much you've already saved, you need to save 10% of your paycheck in order to be able to retire comfortably.</p>
      <p>Next, you'll get to choose your investment mix.</p>
      <Link className="btn btn-primary" to="/setup/investmentMix">Next</Link>
      <Link className="btn btn-secondary" to="/setup/background">Go Back</Link>
    </div>;
  }
}