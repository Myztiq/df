import React from "react";
import { Link } from 'react-router'
import 'components/dashboard.scss'
import FundModal from 'components/fundModal/fundModal.jsx'

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      retirementAge: 67,
      retirementAgeSaved: this.props.editing,
      paycheckAmount: 300,
      paycheckAmountSaved: this.props.editing,
      fundSaved: this.props.editing,
      modalOpen: false,
      currentFund: 'targetDate',
      hasChanged: false
    };
    this.paycheckTotal = 1000;
    this.companyMatchMax = 200;
    this.dangerZone = 50;
    this.recommended = 500;
  }

  changeRetirementAge = (event)=> {
    this.setState({
      retirementAge: parseInt(event.target.value, 10),
      retirementAgeSaved: false
    });
  };
  changePaycheckAmount = (event)=> {
    this.setState({
      paycheckAmount: parseInt(event.target.value, 10),
      paycheckAmountSaved: false
    })
  };
  getPaycheckPercentage = ()=> {
    return Math.floor(this.state.paycheckAmount/this.paycheckTotal * 100);
  };

  getTotalWithCompanyMatch = (myContribution)=> {
    let companyMatch = this.companyMatchMax;
    if (myContribution < companyMatch) {
      companyMatch = myContribution;
    }
    return myContribution + companyMatch;
  };

  openFundModal = ()=>{
    this.setState({
      fundModalOpen: true
    })
  };

  closeFundModal = ()=>{
    this.setState({
      fundModalOpen: false
    })
  };

  setFund = (fundName)=> {
    this.setState({
      currentFund: fundName,
      fundSaved: false
    });
  };

  render() {
    var getSaveButton = (target, level)=> {
      level = level || 'btn-success';
      var save = ()=> {
        var saveObj = {
          hasChanged: true
        };
        saveObj[target] = true;
        this.setState(saveObj);
      };
      if (this.state[target]) {
        return
      }
      return <div className="input-group-btn">
        <div className={'btn ' + level}  onClick={save}>
          <i className="fa fa-check"></i>
        </div>
      </div>;
    };
    var getFinalSaveButton = ()=> {
      if (this.state.retirementAgeSaved && this.state.paycheckAmountSaved && this.state.fundSaved && this.state.hasChanged) {
        return <div className="btn btn-primary" onClick={this.props.save}>Save</div>;
      }
    };

    var getCancelButton = ()=> {
      if (this.props.editing) {
        return <div className="btn btn-secondary" onClick={this.props.save}>Cancel</div>
      }
    };

    var getCardClassName = (currentSaved, dependenciesSaved)=> {
      var base = 'sub-card ';
      if (currentSaved) {
        return base;
      }
      if (!dependenciesSaved && !this.props.editing) {
        return base + 'disabled';
      }
      return base;
    };


    var paycheckButtonLevel = 'btn-success';
    var paycheckSubText = '';
    // Calculate possible states
    var inDanger = this.state.paycheckAmount <= this.dangerZone;
    var belowRecommended = this.getTotalWithCompanyMatch(this.state.paycheckAmount) < this.recommended;
    var belowMatch = this.state.paycheckAmount < this.companyMatchMax;

    if (inDanger) {
      paycheckButtonLevel = 'btn-danger';
      paycheckSubText = <div className="sub bg-danger">
        Having trouble saving for retirement?
        <a href="foo" target="_blank">How can we help?</a>
      </div>;
    } else if (belowMatch && belowRecommended) {
      paycheckButtonLevel = 'btn-warning';
      let myRecommendedContribution = this.recommended/2;
      let totalWithCompanyMatch = this.getTotalWithCompanyMatch(myRecommendedContribution);
      if (totalWithCompanyMatch < this.recommended) {
        myRecommendedContribution += this.recommended - totalWithCompanyMatch;
      }
      let remainingMe = myRecommendedContribution - this.state.paycheckAmount;

      let totalMoreNeeded = this.recommended - this.getTotalWithCompanyMatch(this.state.paycheckAmount);

      paycheckSubText = <div className="sub bg-warning">
        We recommend you save ${totalMoreNeeded} more a month, your company is willing to match ${totalMoreNeeded - remainingMe} more to help you meet this goal.
      </div>;
    } else if (belowMatch) {
      let remainingCompany = this.companyMatchMax - this.state.paycheckAmount;
      paycheckButtonLevel = 'btn-warning';
      paycheckSubText = <div className="sub bg-warning">
        You are not maximizing your companies match, leaving ${remainingCompany} on the table.
      </div>;
    } else if (belowRecommended) {
      paycheckButtonLevel = 'btn-warning';
      paycheckSubText = <div className="sub bg-warning">
        Based on your age and amount saved we recommend you save at least ${this.recommended - this.companyMatchMax - this.state.paycheckAmount} more per paycheck.
      </div>;
    } else {
      if (this.state.paycheckAmountSaved || !this.state.retirementAgeSaved) {
        paycheckSubText = <div className="sub">
          You are saving {this.getPaycheckPercentage()}% of your paycheck every 2 weeks.
        </div>;
      } else {
        paycheckSubText = <div className="sub bg-success">
          Good job! You are saving {this.getPaycheckPercentage()}% of your paycheck every 2 weeks.
        </div>;
      }
    }

    return <div>
      <div className="row">
        <div className="col-xs-4">
          <div className="sub-card">
            <div className="title">I plan to retire when I'm</div>
            <div className={this.state.retirementAgeSaved ? '' : 'input-group'}>
              <input type="number" className="form-control" value={this.state.retirementAge} onChange={this.changeRetirementAge}/>
              {getSaveButton('retirementAgeSaved')}
            </div>
            <div className="sub">The average retirement age is 67</div>
          </div>
        </div>
        <div className="col-xs-4">
          <div className={getCardClassName(this.state.paycheckAmountSaved, this.state.retirementAgeSaved)}>
            <div className="title">Each paycheck I save</div>
            <div className='input-group'>
              <span className="input-group-addon">$</span>
              <input type="number" className="form-control" value={this.state.paycheckAmount} onChange={this.changePaycheckAmount} min="0" max={this.paycheckTotal}/>
              {getSaveButton('paycheckAmountSaved', paycheckButtonLevel)}
            </div>
            <div className="padded">
              {paycheckSubText}
            </div>
          </div>
        </div>
        <div className="col-xs-4">
          <div className={getCardClassName(this.state.fundSaved, this.state.paycheckAmountSaved && this.state.retirementAgeSaved)}>
            <div className="title">Invested in</div>
            <div className={this.state.fundSaved ? '' : 'input-group'}>
              <div className="picker btn btn-secondary form-control" onClick={this.openFundModal}>
                Target Date Fund
              </div>
              {getSaveButton('fundSaved')}
            </div>
            <div className="sub">
              <a href="foo">Fund Details</a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-right">
        <div className="btn-group">
          {getCancelButton()}
          {getFinalSaveButton()}
        </div>
      </div>
      <FundModal
        isOpen={this.state.fundModalOpen}
        close={this.closeFundModal}
        currentFund={this.state.currentFund}
        setFund={this.setFund}
      />
    </div>;
  }
}