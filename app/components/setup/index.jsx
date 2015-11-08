import React from "react";
import Background from "components/setup/background.jsx";
import CheckupResults from "components/setup/checkupResults.jsx";
import InvestmentMix from "components/setup/investmentMix.jsx";
import Overview from "components/setup/overview.jsx";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import "components/setup/index.scss";


export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'Background',
      companyMax: .05,
      direction: 'forward'
    };
  }

  goToView = (view, back) => {
    this.setState({
      currentPage: view,
      direction: back ? 'backwards' : 'forwards'
    });
  };

  saveBackground = (backgroundConfig) => {
    this.goToView('CheckupResults');
    this.setState({
      age: backgroundConfig.age,
      savings: backgroundConfig.savings
    });
  };

  saveInvestmentMix = (allocations)=> {
    this.setState({
      allocations: allocations
    });
    this.goToView('Overview');
  };

  prepGoToView = (viewName, back)=> {
    return ()=> {
      this.goToView(viewName, back)
    }
  };

  render() {
    let stepOrder = [
      'Background',
      'CheckupResults',
      'InvestmentMix',
      'Overview'
    ];
    let getCurrentView = ()=> {
      switch(this.state.currentPage) {
        case 'Background':
          return <Background
            save={this.saveBackground}
            age={this.state.age}
            savings={this.state.savings}
            key="background"
          />;
        case 'CheckupResults':
          return <CheckupResults
            back={this.prepGoToView('Background', true)}
            save={this.prepGoToView('InvestmentMix')}
            key="checkupResults"
          />;
        case 'InvestmentMix':
          return <InvestmentMix
            back={this.prepGoToView('CheckupResults', true)}
            save={this.saveInvestmentMix}
            allocations={this.state.allocations}
            key="investmentMix"
          />;
        case 'Overview':
          return <Overview
            key="overview"
            toBackground={this.prepGoToView('Background', true)}
            toInvestments={this.prepGoToView('InvestmentMix', true)}
            totalPaycheck={1800}
            defaultContributionPercent={.1}
            age={this.state.age}
            savings={this.state.savings}
            companyMax={this.state.companyMax}
            allocations={this.state.allocations}
          />;
        default:
          return <div key="nothing">No Matched View - {this.state.currentPage}</div>;
      }
    };
    let getStepClass = (step)=>{
      let diff = stepOrder.indexOf(this.state.currentPage) - stepOrder.indexOf(step);
      if (diff === 0) {
        return 'step active';
      }
      if (diff > 0) {
        return 'step complete'
      }
      return 'step';
    };
    return <div id="setup">
      <div className="steps">
        <div className={getStepClass('Background')} onClick={this.prepGoToView('Background', true)}><span>Background</span></div>
        <div className={getStepClass('CheckupResults')} onClick={this.prepGoToView('CheckupResults', true)}><span>Checkup Results</span></div>
        <div className={getStepClass('InvestmentMix')} onClick={this.prepGoToView('InvestmentMix', true)}><span>Investment Mix</span></div>
        <div className={getStepClass('Overview')}><span>Overview</span></div>
      </div>
      <div className="animation-container">
        <ReactCSSTransitionGroup transitionName={`slide-${this.state.direction}`} transitionEnterTimeout={500} transitionLeaveTimeout={500}>
          {getCurrentView()}
        </ReactCSSTransitionGroup>
      </div>
    </div>;

  }
}