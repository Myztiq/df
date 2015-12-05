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
        title="Target Date Fund"
        help="I don't care, just do the smartest thing with my money."
      />
      <FancyChoice
        onPicked={this.selectRiskFund}
        selected={'pickRisk' === this.props.currentFund}
        title="Pick your risk level"
        help="I want to learn what level of risk I should go with."
      />
      <FancyChoice
        onPicked={this.selectAdvancedFund}
        selected={'advanced' === this.props.currentFund}
        title="Advanced Mode"
        help="I know what i'm doing, seeing a bunch of ticker symbols makes me happy."
      />
    </div>;
  }
}


