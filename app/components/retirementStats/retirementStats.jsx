import React from "react";
import moment from "moment";
import d3 from "d3";
import epoch from "epoch-charting";
import "epoch-charting/sass/epoch.scss"
import "components/retirementStats/retirementStats.scss"

var accountBalanceData = [
  {
    x: moment().startOf('month').subtract(1, 'month').format('MMM D'),
    y: 29715.88 - 930
  },
  {
    x: moment().startOf('month').subtract(1, 'month').add(2, 'weeks').format('MMM D'),
    y: 29715.88 - 620
  },
  {
    x: moment().startOf('month').subtract(2, 'month').format('MMM D'),
    y: 29715.88 - 310
  },
  {
    x: moment().startOf('month').subtract(2, 'month').add(2, 'weeks').format('MMM D'),
    y: 29715.88
  }
];
export default class extends React.Component {
  componentDidMount = ()=>{
    $('#barChart').epoch({
      type: 'bar',
      data: [{
        label: 'Account Balances',
        values: accountBalanceData
      }]
    });
  };

  render() {
    return <div id="retirementStats">
      <div className="row">
        <div className="col-sm-8">
          <div className="total-saved">
            <small>Total Balance:</small>
            <span>$29,715.88</span>
          </div>
        </div>
        <div className="col-sm-4">
          <dl className="horizontal">
            <dt>Performance (today): </dt>
            <dd className="green">+.43%</dd>
            <dt>Performance MTD: </dt>
            <dd className="green">+1.1%</dd>
            <dt>Performance YTD: </dt>
            <dd className="green">+5.47%</dd>
          </dl>
        </div>
      </div>
      <div className="row details">
        <div className="col-sm-4">
          <div className="">
            <h4>Key Retirement Numbers</h4>
            <dl>
              <dt>Money needed for retirement: </dt>
              <dd>$900,000.00</dd>
              <dt>Money saved in other accounts: </dt>
              <dd>$10,000.00 <a href="#" onClick={this.props.edit}><i className="fa fa-pencil"></i></a></dd>
              <dt>Company Match: </dt>
              <dd>50% of first 7% of your base salary</dd>
            </dl>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="">
            <h4>Investments</h4>
            <table className="table table-hover table-sm">
              <thead className="thead-default">
                <tr>
                  <th>Security</th>
                  <th>Allocation</th>
                  <th>Performance MTD</th>
                  <th>Performance YTD</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><a href="#">FUSEX</a></td>
                  <td>70%</td>
                  <td className="green">+5.4%</td>
                  <td className="green">+11.41%</td>
                </tr>
                <tr>
                  <td><a href="#">VWO</a></td>
                  <td>30%</td>
                  <td className="green">+2.89%</td>
                  <td className="red">-2.61%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="">
            <h4>Paycheck Contributions</h4>
            <dl className="horizontal">
              <dt>Contributions: </dt><dd>$300</dd>
              <dt>Match: </dt><dd>$111</dd>
              <dt>Total Contribution Per Paycheck: </dt><dd>$411</dd>
              <dt>Contributions YTD: </dt><dd>$7,398</dd>
            </dl>
          </div>
        </div>
      </div>
    </div>;
  }
}