import React from "react";
import 'components/nonRetirementSetup/newCar.scss'

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subSaveCount: 0
    };
  }

  subSave = ()=>{
    this.setState({
      subSaveCount: this.state.subSaveCount + 1
    })
  }

  save = ()=>{
    var goal = this.props.goal;
    goal.saved = true;
    this.props.updateGoal(goal);
  }

  render() {
    var goalSaved = <div/>
    if (this.props.goal.saved) {
      return <div id="newCar">
        <div className="pull-right">
          <a href="#">Have questions about saving for the car?</a>
        </div>
        <h3>New Car</h3>
        <div className="row">
          <div className="col-sm-8">
            <div className="total-saved">
              <small>Recommended amount saved per paycheck</small>
              <span>$20.00</span>
            </div>
            <small>You should have $1,000 <a href="#" onClick={this.props.edit}><i className="fa fa-pencil"></i></a> saved so far</small>
          </div>
          <div className="col-sm-4">
            <dl className="horizontal">
              <dt>Money should be in a: </dt>
              <dd>High Yield Bank Account</dd>
              <dt>Target Date: </dt>
              <dd>December 2017 <a href="#" onClick={this.props.edit}><i className="fa fa-pencil"></i></a></dd>
              <dt>Target Amount: </dt>
              <dd>$2,000 <a href="#" onClick={this.props.edit}><i className="fa fa-pencil"></i></a></dd>
            </dl>
          </div>
        </div>
      </div>
    }


    var finalSaveButton
    if (this.state.subSaveCount > 2) {
      finalSaveButton = <div className="text-right">
        <div className="btn btn-success" onClick={this.save}>Save</div>
      </div>;
    }

    var getSaveButton = (index) =>{
      if (this.state.subSaveCount > index) {
        return
      }
      return <div className="input-group-btn">
        <div className='btn btn-success' onClick={this.subSave}>
          <i className="fa fa-check"></i>
        </div>
      </div>
    }

    return <div>
      <div className="pull-right">
        <a href="#">Have questions about saving for the car?</a>
      </div>
      <h3>New Car</h3>
      <div className="row">
        <div className="col-xs-4">
          <div className={'sub-card ' + (this.state.subSaveCount > 0 ? 'saved' : '')}>
            <div className="title">I plan on buying the car on</div>
            <div className={this.state.subSaveCount > 0 ? '' : 'input-group'}>
              <input type="date" className="form-control" style={{height: '38px'}}/>
              {getSaveButton(0)}
            </div>
            <div className="sub">When do you need the money by?</div>
          </div>
        </div>
        <div className="col-xs-4">
          <div className={'sub-card ' + (this.state.subSaveCount > 0 ? '' : 'disabled')}>
            <div className="title">The downpayment I need is</div>
            <div className='input-group'>
              <span className="input-group-addon">$</span>
              <input type="number" className="form-control" defaultValue={0}/>
              {getSaveButton(1)}
            </div>
            <div className="sub">The average downpayment on a car is $4,000</div>
          </div>
        </div>
        <div className="col-xs-4">
          <div className={'sub-card ' + (this.state.subSaveCount > 1 ? 'saved' : 'disabled')}>
            <div className="title">I've already saved</div>
            <div className='input-group'>
              <span className="input-group-addon">$</span>
              <input type="number" className="form-control" defaultValue={0}/>
              {getSaveButton(2)}
            </div>
            <div className="sub">How much have you saved so far?</div>
          </div>
        </div>
      </div>
      {finalSaveButton}
    </div>
  }
}


