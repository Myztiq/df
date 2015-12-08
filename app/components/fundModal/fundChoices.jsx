import React from "react";
import 'components/fundModal/fundChoices.scss'
import FancyChoice from 'components/fancyChoice/fancyChoice.jsx'

export default class extends React.Component {
  selectTargetDateFund = ()=> {
    this.props.setFund('targetDate');
    this.props.close();
  };

  selectAdvancedFund = ()=> {
    this.props.showDetails('advanced');
  };

  selectRiskFund = ()=> {
    this.props.showDetails('pickRisk');
  };

  render() {
    return <div id="fundChoices">
      <FancyChoice
        onPicked={this.selectTargetDateFund}
        selected={'targetDate' === this.props.currentFund}
        title="Beginner"
        help="Keep it simple and use an all-in-one target date fund."
      />
      <FancyChoice
        onPicked={this.selectRiskFund}
        selected={'pickRisk' === this.props.currentFund}
        title="Intermediate"
        help="Take a risk questionnaire and get a recommended allocation that you can customize."
      />
      <FancyChoice
        onPicked={this.selectAdvancedFund}
        selected={'advanced' === this.props.currentFund}
        title="Advanced"
        help="I know what I'm doing, I want to pick my own mix of funds."
      />
    </div>;
  }
}


