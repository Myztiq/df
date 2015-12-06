import React from "react";
import { Link } from 'react-router'
import 'components/dashboard.scss'
import RetirementSetup from 'components/retirementSetup/retirementSetup.jsx'
import RetirementStats from 'components/retirementStats/retirementStats.jsx'
import {Switch, Case} from 'components/switch/switch.jsx'
import PickTypeModal from 'components/nonRetirementSetup/pickTypeModal.jsx'
import NewCarGoal from 'components/nonRetirementSetup/newCar.jsx'

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editingRetirement: true,
      retirementSaved: false,
      anotherGoalModalOpen: false,
      otherGoals: []
    };
  }

  saveRetirementSetup = () => {
    this.setState({
      editingRetirement: false,
      retirementSaved: true
    });
  };
  editRetirement = () => {
    this.setState({
      editingRetirement: true
    });
  };
  addAnotherGoal = () => {
    this.setState({
      anotherGoalModalOpen: true
    })
  }
  picked = (type) => {
    var otherGoals = this.state.otherGoals
    otherGoals.push({ type: type })
    this.setState({
      otherGoals: otherGoals,
      anotherGoalModalOpen: false
    })
  }

  goalRenderers = {
    'newCar': NewCarGoal
  }

  prepUpdateGoal = (index)=> {
    return (newGoal) => {
      var goals = this.state.otherGoals
      goals[index] = newGoal
      this.setState({
        otherGoals: goals
      })
    }
  }

  render() {
    var renderOtherGoals = ()=> {
      return this.state.otherGoals.map((goal, index)=> {
        var ComponentName = this.goalRenderers[goal.type]
        return <div className="card card-block" key={index}>
          <ComponentName goal={goal} updateGoal={this.prepUpdateGoal(index)}/>
        </div>
      })
    }
    return <div id="retirementDashboard">
      <div className="card card-block">
        <div className="pull-right">
          <a href="#">Have questions about retirement?</a>
        </div>
        <h3>Retirement</h3>
        <div className="card-body">
          <Switch expression={this.state.editingRetirement}>
            <Case value={true}>
              <RetirementSetup save={this.saveRetirementSetup} editing={this.state.retirementSaved} addAnotherGoal={this.addAnotherGoal}/>
            </Case>
            <Case value={false}>
              <RetirementStats edit={this.editRetirement}/>
            </Case>
          </Switch>
        </div>
      </div>
      {renderOtherGoals()}
      <div className="card card-block">
        <div className="card-body">
          <div className="btn btn-secondary addAnother" onClick={this.addAnotherGoal}>
            <i className="fa fa-plus"></i>
            <span>Add another goal</span>
          </div>
        </div>
      </div>
      <PickTypeModal
        onPicked={this.picked}
        isOpen={this.state.anotherGoalModalOpen}
      />
    </div>;
  }
}