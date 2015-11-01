import React from "react";
import { Link } from 'react-router'

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contribution: this.props.defaultContributionPercent * this.props.totalPaycheck
    };
  }

  changeContribution = (event)=> {
    this.setState({
      contribution: parseFloat(event.target.value)
    });
  };


  save = ()=> {
    alert('TODO');
  };

  render() {
    let retirementYear = new Date().getFullYear() + 62 - this.props.age;
    let employerMatch = this.state.contribution;
    let warning = null;
    if (employerMatch >= this.props.totalPaycheck * this.props.companyMax) {
      employerMatch = this.props.totalPaycheck * this.props.companyMax;
    } else {
      warning = <div className="alert-warning alert">Your employer is willing to contribute
        ${this.props.totalPaycheck * this.props.companyMax - this.state.contribution} more to your
        account. You are leaving free money on the table.</div>;
    }
    let totalContribution = employerMatch + this.state.contribution;

    let allocationList = Object.keys(this.props.allocations).map((key)=>{
      return <tr>
        <td>
          <a href={'https://www.google.com/search?q=' + key} target="_blank">
            {key}
          </a>
        </td>
        <td className="text-right">{this.props.allocations[key]}%</td>
        <td className="text-right">
          ${(this.props.allocations[key] * (totalContribution / 100)).toFixed(2)}
        </td>
      </tr>
    });

    return <div>
      <h1>401(K) Account Overview</h1>

      <div className="row">
        <div className="col-xs-4">
          <div className="card card-block">
            <h4 className="card-title">
              Key Retirement Numbers
            </h4>
            <div className="card-text">
              <ul>
                <li>Retiring in {retirementYear}</li>
                <li>${this.props.savings} saved in other retirement accounts</li>
                <li>Company match: Up to {Math.floor(this.props.companyMax * 100)}% of salary</li>
              </ul>
            </div>
            <div className="card-link">
              <div className="btn btn-secondary" onClick={this.props.toBackground}>Back to Retirement Numbers</div>
            </div>
          </div>
        </div>
        <div className="col-xs-4">
          <div className="card card-block">
            <h4 className="card-title">
              Each Paycheck Is Invested In
            </h4>
            <div className="card-text">
              <table className="table table-striped">
                <thead>
                <tr>
                  <th>Ticker</th>
                  <th>Allocation (%)</th>
                  <th>Amount ($)</th>
                </tr>
                </thead>
                <tbody>
                  {allocationList}
                </tbody>
              </table>
            </div>
            <div className="card-link">
              <div className="btn btn-secondary" onClick={this.props.toInvestments}>Back to Pick Investments</div>
            </div>
          </div>
        </div>

        <div className="col-xs-4">
          <div className="card card-block">
            <h4 className="card-title">
              Paycheck Contribution
            </h4>
            <div className="card-text">
              <ul>
                <li>
                  Each paycheck you're putting away
                  <input type="number" value={this.state.contribution} onChange={this.changeContribution}/>
                </li>
                <li>Matched with ${employerMatch} from your employer</li>
                <li>Which totals ${totalContribution}/paycheck</li>
                <li>Auto increase contribution <input type="checkbox"/></li>
              </ul>
            </div>
            <div className="card-link">
              {warning}
              <div className="btn btn-primary" onClick={this.save}>Finish Account Setup</div>
            </div>
          </div>
        </div>
      </div>
    </div>;
  }
}