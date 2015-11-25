import React from "react";
import 'components/fundModal/fundChoices.scss'

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
    var getCheckbox = (fundType) => {
      if (fundType === this.props.currentFund) {
        return <i className="fa fa-check-circle-o"></i>;
      }
      return <i className="fa fa-circle-o"></i>;
    };

    return <div id="fundChoices">
      <div className="btn btn-secondary fund-choice" onClick={this.selectTargetDateFund}>
        { getCheckbox('targetDate') }
        Target Date Fund
        <div className="help">I don't care, just do the smartest thing with my money.</div>
      </div>
      <div className="btn btn-secondary fund-choice" onClick={this.selectRiskFund}>
        { getCheckbox('pickRisk') }
        Pick your risk level
        <div className="help">I want to learn what level of risk I should go with.</div>
      </div>
      <div className="btn btn-secondary fund-choice" onClick={this.selectAdvancedFund}>
        { getCheckbox('advanced') }
        Advanced Mode
        <div className="help">I know what i'm doing, seeing a bunch of ticker symbols makes me happy.</div>
      </div>
    </div>;
  }
}


