import React from "react";
import investments from "services/investments.js"

export default class extends React.Component {
  handleChange = (event)=>{
    this.props.updatedValue(parseFloat(event.target.value));
  };

  render() {
    var investment = this.props.investment;
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
        <input type="number" value={this.props.value} onChange={this.handleChange} min="0" max="100"/>
      </td>
    </tr>;
  }
}