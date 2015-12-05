import React from "react";
import { Link } from 'react-router'
import 'components/dashboard.scss'
import RetirementSetup from 'components/retirementSetup/retirementSetup.jsx'
import RetirementStats from 'components/retirementStats/retirementStats.jsx'
import {Switch, Case} from 'components/switch/switch.jsx'
import PickTypeModal from 'components/nonRetirementSetup/pickTypeModal.jsx'

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editingRetirement: true,
      retirementSaved: false,
      anotherGoalModalOpen: false
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

  render() {
    return <div id="retirementDashboard">
      <div className="card card-block">
        <h3>Retirement</h3>
        <div className="card-body">

          <Switch expression={this.state.editingRetirement}>
            <Case value={true}>
              <RetirementSetup save={this.saveRetirementSetup} editing={this.state.retirementSaved}/>
            </Case>
            <Case value={false}>
              <RetirementStats edit={this.editRetirement}/>
            </Case>
          </Switch>
        </div>
      </div>
      <div className="card card-block">
        <div className="card-body">
          <div className="btn btn-secondary addAnother" onClick={this.addAnotherGoal}>
            <i className="fa fa-plus"></i>
            <span>Add another goal</span>
          </div>
        </div>
      </div>
      <PickTypeModal
        isOpen={this.state.anotherGoalModalOpen}
      />
    </div>;
  }
}