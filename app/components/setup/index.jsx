import React from "react";
import Background from "components/setup/background.jsx";
import CheckupResults from "components/setup/checkupResults.jsx";
import InvestmentMix from "components/setup/investmentMix.jsx";
import Overview from "components/setup/overview.jsx";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'Background',
      companyMax: .05
    };
  }

  goToView = (view) => {
    this.setState({
      currentPage: view
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

  prepGoToView = (viewName)=> {
    return ()=> {
      this.goToView(viewName)
    }
  };

  render() {
    switch(this.state.currentPage) {
      case 'Background':
        return <Background save={this.saveBackground} age={this.state.age} savings={this.state.savings}/>;
      case 'CheckupResults':
        return <CheckupResults back={this.prepGoToView('Background')} save={this.prepGoToView('InvestmentMix')}/>;
      case 'InvestmentMix':
        return <InvestmentMix back={this.prepGoToView('CheckupResults')} save={this.saveInvestmentMix} allocations={this.state.allocations}/>;
      case 'Overview':
        return <Overview
          toBackground={this.prepGoToView('Background')}
          toInvestments={this.prepGoToView('InvestmentMix')}
          totalPaycheck={1800}
          defaultContributionPercent={.1}
          age={this.state.age}
          savings={this.state.savings}
          companyMax={this.state.companyMax}
          allocations={this.state.allocations}
        />;
      default:
        return <div>No Matched View - {this.state.currentPage}</div>;
    }
  }
}