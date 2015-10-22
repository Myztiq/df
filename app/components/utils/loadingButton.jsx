import React from "react";

export default class extends React.Component {
  render() {
    var { saving, value, savingText, ...other } = this.props;
    var value = this.props.label;
    if (this.props.saving) {
      value = this.props.savingText;
    }
    return <input type="submit" value={value} disabled={this.props.saving} {...other}/>;
  }
}