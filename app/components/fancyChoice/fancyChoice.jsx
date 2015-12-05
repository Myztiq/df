import React from "react";
import { Modal } from 'react-bootstrap'
import {Switch, Case} from 'components/switch/switch.jsx'
import 'components/fancyChoice/fancyChoice.scss'

export default class extends React.Component {

  render() {
    return <div className="btn btn-secondary fancy-choice" onClick={this.props.onPicked}>
      <Switch expression={this.props.selected}>
        <Case value={true}>
          <i className="fa fa-check-circle-o"></i>
        </Case>
        <Case value={false}>
          <i className="fa fa-circle-o"></i>
        </Case>
      </Switch>
      {this.props.title}
      <div className="help">{this.props.help}</div>
    </div>
  }
}


