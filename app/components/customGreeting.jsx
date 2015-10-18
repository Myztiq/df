import React from "react";

export default class customGreeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'test'
    };
  }


  handleChange = (event) => {
    this.setState({
      value: event.target.value
    });
  };

  componentDidMount = () => {
    this.setState({
      value: this.props.params.id
    });
  };

  render() {
    return <div>
      <input type="text" value={this.state.value} placeholder={this.props.params.id} onChange={this.handleChange}/>
      Hello!! {this.state.value.toUpperCase() + Math.random()}
    </div>;
  }
}