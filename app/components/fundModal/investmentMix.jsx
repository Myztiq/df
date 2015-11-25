import React from "react";
import investments from "services/investments.js"
import InvestmentRow from "components/fundModal/investmentRow.jsx"
import "components/fundModal/investmentMix.scss";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      investments: null,
      allocations: this.props.allocations || {}
    };
    investments.getInvestments()
      .then((investments)=>{
        var targetDateFund = investments.find((investment)=>{
          return investment.targetDateFund;
        });
        var newAllocations = this.state.allocations;
        if (!this.props.allocations) {
          console.log('No Allocations!');
          newAllocations = {};
          newAllocations[targetDateFund.id] = 100;
        }
        this.setState({
          investments: investments,
          allocations: newAllocations
        });
      });
  }

  setupChangeAllocation = (id)=> {
    return (newValue)=>{
      var allocations = this.state.allocations;
      allocations[id] = newValue;
      this.setState({
        allocations: allocations
      });
    }
  };

  getTotalAllocations = ()=>{
    let total = 0;
    Object.keys(this.state.allocations)
      .forEach((key)=> {
        total += this.state.allocations[key];
      });
    return total;
  };

  save = ()=>{
    if (this.getTotalAllocations() !== 100) {
      return;
    }
    this.props.save(this.state.allocations);
  };

  render() {
    if (!this.state.investments) {
      return <div>Loading</div>
    }

    var totalAllocations = this.getTotalAllocations();
    var targetDateFund = this.state.investments.find((investment)=>{
      return investment.targetDateFund;
    });
    var investmentDom = this.state.investments
      .filter((investment)=>{
        return !investment.targetDateFund;
      })
      .map((investment)=>{
        return <InvestmentRow key={investment.id} investment={investment} value={this.state.allocations[investment.id]} updatedValue={this.setupChangeAllocation(investment.id)}/>
      });
    return <div>
      <h1>Choose 401(k) Investments</h1>
      <table className="table table-striped investments">
        <thead>
          <tr>
            <th>Name</th>
            <th>Ticker</th>
            <th>Type of investment fund</th>
            <th>One year performance</th>
            <th>Three year performance</th>
            <th>Five year performance</th>
            <th>Fee</th>
            <th>Pick Allocation</th>
          </tr>
        </thead>
        <tbody>
          {investmentDom}
          <tr>
            <td colSpan="8">
              Overwhelemed by the options? Consider an all-in-one target date fund.
            </td>
          </tr>
          <InvestmentRow investment={targetDateFund} value={this.state.allocations[targetDateFund.id]} updatedValue={this.setupChangeAllocation(targetDateFund.id)}/>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="8">
              <div className={totalAllocations === 100 ? 'pull-right green' : 'pull-right red'}>
                Total: {totalAllocations}%
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
      <div className="btn btn-secondary" onClick={this.props.back}>Go Back</div>
      <div className={'btn btn-primary ' + (totalAllocations === 100 ? '' : 'disabled')} onClick={this.save}>Next</div>
    </div>;
  }
}