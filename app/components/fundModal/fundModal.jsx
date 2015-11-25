import React from "react";
import FundChoices from "components/fundModal/fundChoices.jsx"
import InvestmentMix from "components/fundModal/investmentMix.jsx"
import { Modal } from 'react-bootstrap'
import 'components/fundModal/fundModal.scss'
import {Switch, Case} from 'components/switch/switch.jsx'

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detailsShown: 'choices'
    };
  }

  static propTypes = {
    setFund: React.PropTypes.func.isRequired,
    close: React.PropTypes.func.isRequired,
    currentFund: React.PropTypes.string.isRequired
  };

  static defaultProps = {
    currentFund: 'targetDate'
  };

  showDetails = (detailKey)=> {
    this.setState({
      detailsShown: detailKey
    });
  };

  close = ()=>{
    this.props.close();

    // Wait to switch back until the animation has time to complete.
    setTimeout(()=>{
      this.setState({
        detailsShown: 'choices'
      });
    }, 200);
  };

  render() {
    return <Modal id="fundModal" show={this.props.isOpen} onHide={this.close} className={this.state.detailsShown === 'advanced' ? 'expanded' : ''}>
      <Modal.Header closeButton>
        <Modal.Title>Pick Your Fund</Modal.Title>
        <Modal.Body>
          <Switch expression={this.state.detailsShown}>
            <Case value="advanced">
              <InvestmentMix />
            </Case>
            <Case value="pickRisk">
              <div>Pick your Risk.</div>
              <ul>
                <li>High</li>
                <li>Medium</li>
                <li>Low</li>
              </ul>
            </Case>
            <Case value="choices">
              <FundChoices
                showDetails={this.showDetails}
                {...this.props}
              />
            </Case>
          </Switch>
        </Modal.Body>
      </Modal.Header>
    </Modal>
  }
}


