import React from "react";
import LoadingButton from "components/utils/loadingButton.jsx"


export default class extends React.Component {

  submit = (event) => {
    event.preventDefault();
    this.props.save({
      age: this.refs.age.value,
      savings: this.refs.savings.value
    });
  };

  render() {
    return <div>
      <h1>First, Some Quick Background On Your Retirement Situation</h1>
      <form onSubmit={this.submit}>
        <div className="form-group">
          <label htmlFor="age">Please confirm your age.</label>
          <input className="form-control" ref="age" id="age" type="number" ref="age" placeholder="67" defaultValue={this.props.age} required/>
        </div>
        <div className="form-group">
          <label htmlFor="savings">How much you have saved for retirement outside of Dream Forward Financial.</label>
          <input name="savings" ref="savings" placeholder="0" ref="savings" defaultValue={this.props.savings} required/>
        </div>
        <LoadingButton label="Next" className="btn btn-primary" type="submit"/>

      </form>
    </div>;
  }
}