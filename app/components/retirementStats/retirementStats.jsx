import React from "react";
import moment from "moment";
import d3 from "d3";
import epoch from "epoch-charting";
import "epoch-charting/sass/epoch.scss"

var accountBalanceData = [
  {
    x: moment().startOf('month').subtract(1, 'month').format('MMM D'),
    y: 0
  },
  {
    x: moment().startOf('month').subtract(1, 'month').add(2, 'weeks').format('MMM D'),
    y: 300
  },
  {
    x: moment().startOf('month').subtract(2, 'month').format('MMM D'),
    y: 600
  },
  {
    x: moment().startOf('month').subtract(2, 'month').add(2, 'weeks').format('MMM D'),
    y: 900
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
    return <div>
      <div className="btn btn-link edit" onClick={this.props.edit}>Edit Retirement Goals</div>
      <div id="barChart" className="epoch pull-right" style={{'width': '400px', height: '200px'}}></div>
      <dl>
        <dt>Account Total</dt>
        <dd>$900</dd>
        <dt>Investment Allocation</dt>
        <dd>Target Date Fund <a href="#" onClick={this.props.edit}><i className="fa fa-pencil"></i></a></dd>
        <dt>Next Paycheck</dt>
        <dd>{moment().endOf('month').add(1, 'day').format('MMM D, YYYY')}</dd>
        <dt>Allocation Per Paycheck</dt>
        <dd>$300 <a href="#" onClick={this.props.edit}><i className="fa fa-pencil"></i></a></dd>
      </dl>
    </div>;
  }
}