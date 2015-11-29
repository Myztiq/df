import React from "react";

export class Case extends React.Component {
  static displayName = 'Case';
  static propTypes = {
    value: React.PropTypes.any
  };

  render() {
    if (this.props.children.length > 1) {
      return <div>{this.props.children}</div>;
    }
    return this.props.children;
  }
}

export class Switch extends React.Component {
  static displayName = 'Switch';
  static propTypes = {
    expression: React.PropTypes.any.isRequired,
    children: React.PropTypes.arrayOf(React.PropTypes.shape({type: React.PropTypes.oneOf([Case])}))
  };

  render() {
    var matchedChild = this.props.children.find((Child) => {
      return Child.props.value === this.props.expression;
    });
    if (matchedChild) {
      return matchedChild;
    }

    var defaultChild = this.props.children.find((Child) => {
      return !Child.props.hasOwnProperty('value');
    });
    if (defaultChild) {
      return defaultChild;
    }

    return <div/>
  }
}