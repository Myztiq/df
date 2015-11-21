import React from "react";
import { Link } from 'react-router'
import 'components/setup/dashboard.scss'

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      retirementAge: 67,
      retirementAgeSaved: false,
      paycheckAmount: 110,
      paycheckAmountSaved: false,
      fundSaved: false
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

  render() {
    var getSaveButton = (target, level)=> {
      level = level || 'btn-success';
      var save = ()=> {
        var saveObj = {};
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
      if (this.state.retirementAgeSaved && this.state.paycheckAmountSaved && this.state.fundSaved) {
        return <div className="text-right">
          <div className="btn btn-primary">Save</div>
        </div>;
      }
    };
    var getCardClassName = (currentSaved, dependenciesSaved)=> {
      var base = 'sub-card ';
      if (currentSaved) {
        return base;
      }
      if (!dependenciesSaved) {
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
      paycheckSubText = <div className="sub bg-success">
        Good job! You are saving {this.getPaycheckPercentage()}% of your paycheck every 2 weeks.
        </div>;
    }



    return <div id="retirementDashboard">
      <div className="card card-block">
        <h3>Retirement</h3>
        <div className="card-body">
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
                  <div className="picker btn btn-secondary form-control" data-toggle="modal" data-target="#fund">
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
          {getFinalSaveButton()}
        </div>
      </div>

      <div className="card card-block">
        <div className="card-body">
          <div className="btn btn-secondary addAnother">
            <i className="fa fa-plus"></i>
            <span>Add another goal</span>
          </div>
        </div>
      </div>



      <div className="modal fade" id="fund"  role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                <span className="sr-only">Close</span>
              </button>
              <h4 className="modal-title" id="myModalLabel">Pick Your Fund</h4>
            </div>
            <div className="modal-body">

              <div className="btn btn-secondary fund-choice">
                <i className="fa fa-check-circle-o"></i>
                Target Date Fund
                <div className="help">I don't care, just do the smartest thing with my money.</div>
              </div>
              <div className="btn btn-secondary fund-choice">
                <i className="fa fa-circle-o"></i>
                Pick your risk level
                <div className="help">I want to learn what level of risk I should go with.</div>
              </div>
              <div className="btn btn-secondary fund-choice">
                <i className="fa fa-circle-o"></i>
                Advanced Mode
                <div className="help">I know what i'm doing, seeing a bunch of ticker symbols makes me happy.</div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="savingsAmount"  role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                <span className="sr-only">Close</span>
              </button>
              <h4 className="modal-title" id="myModalLabel">How much do you want to save</h4>
            </div>
            <div className="modal-body">


              <input type="number" defaultValue="10"/>%

              <div className="help">
                Your company is matching you up to $200 every paycheck.
              </div>

              <br/>
              <div className="alert alert-warning">
                <strong>Careful</strong> it looks like you are bringing your contribution down to a dangerously low level.
                <p>How can we help?</p>
                <ul>
                  <li><a href="foo">Foo 1</a></li>
                  <li><a href="foo">Foo 2</a></li>
                  <li><a href="foo">Foo 3</a></li>
                  <li><a href="foo">Foo 4</a></li>
                  <li><a href="foo">Foo 5</a></li>
                  <li><a href="foo">Foo 6</a></li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>



      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      Dashboard!

      <Link className="btn btn-primary" to="/setup">Setup</Link>
      <Link className="btn btn-primary" to="/login">Login</Link>
      <Link className="btn btn-primary" to="/register">Register</Link>
    </div>;
  }
}