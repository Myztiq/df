import React from "react";
import { Modal } from 'react-bootstrap'
import FancyChoice from 'components/fancyChoice/fancyChoice.jsx'

export default class extends React.Component {

  render() {
    return <Modal id="fundModal" show={this.props.isOpen}>
      <Modal.Header closeButton>
        <Modal.Title>
          What are you trying to save for?
        </Modal.Title>
        <Modal.Body>
          <FancyChoice
            selected={false}
            title="College Education"
            help="We'll worry about how to pay for it so you can drop them off with ease."
          />
          <FancyChoice
            selected={false}
            title="Buying a new car"
            help="We help you save so you can enjoy that new car smell."
          />
          <FancyChoice
            selected={false}
            title="New House"
            help="Worry about where to put the furniture not the down payment."
          />
          <FancyChoice
            selected={false}
            title="Wedding"
            help="We let you make that day special instead of worrying about the bill."
          />
          <FancyChoice
            selected={false}
            title="Baby"
            help="We’ll help you plan so you can focus on what color to pain the room."
          />
          <FancyChoice
            selected={false}
            title="Vacation"
            help="We help you to take a vacation from managing your vacation fund."
          />
        </Modal.Body>
      </Modal.Header>
    </Modal>
  }
}


