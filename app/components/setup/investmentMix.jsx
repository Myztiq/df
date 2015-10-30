import React from "react";
import investments from "services/investments.js"

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      investments: null,
      allocations: this.props.allocations || {}
    };
    investments.getInvestments()
      .then((investments)=>{
        this.setState({
          investments: investments
        });
      });
  }

  render() {
    if (!this.state.investments) {
      return <div>Loading</div>
    }
    var investmentDom = this.state.investments.map((investment)=>{
      return <tr key={investment.name}>
        <td>{investment.name}</td>
        <td>
          <a href={'https://www.google.com/search?q=' + investment.id} target="_blank">
            {investment.id}
          </a>
        </td>
        <td>{investment.type}</td>
        <td className={investment.oneYear < 0 ? 'red' : 'green'}>{investment.oneYear}%</td>
        <td className={investment.oneYear < 0 ? 'red' : 'green'}>{investment.threeYear}%</td>
        <td className={investment.oneYear < 0 ? 'red' : 'green'}>{investment.fiveYear}%</td>
        <td>{investment.fee}%</td>
        <td>
          <input type="number" defaultValue={this.state.allocations[investment.id]}/>
        </td>
      </tr>;
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
        <tbody>{investmentDom}</tbody>
      </table>
      <div className="btn btn-secondary" onClick={this.props.back}>Go Back</div>
      <div className="btn btn-primary" onClick={this.props.save}>Next</div>
    </div>;
  }
}