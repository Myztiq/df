import React from "react";
import { Modal } from 'react-bootstrap'

export default class extends React.Component {

  done = () => {
    this.props.onPicked('newCar')
  };

  render() {
    return <Modal id="fundModal" show={this.props.isOpen}>
      <Modal.Header closeButton>
        <Modal.Title>
          So you are saving for a car...
        </Modal.Title>
        <Modal.Body>
          <p>
            We get it. Cars are expensive and you can't live your life without a car.
            But saving enough for the down payment may be a lot easier than you think.
          </p>
          <p>
          <a href="#">Knowledge Center - How To Save For A New Car</a>
          </p>

          <p>
            Next, we'll help you figure out how much you need to save each paycheck to be able to hit all your savings goals.
          </p>

          <div onClick={this.done} className="btn btn-primary pull-right">Next</div>
        </Modal.Body>
      </Modal.Header>
    </Modal>
  }
}


