import React from "react";

export default class extends React.Component {
  submit = (event) => {
    event.preventDefault();

    this.props.history.pushState(null, '/setup/checkupResults');
  };
  render() {
    return <div>
      <h1>First, Some Quick Background On Your Retirement Situation</h1>
      <form onSubmit={this.submit}>
        <div className="form-group">
          <label htmlFor="age">Please confirm your age.</label>
          <input className="form-control" ref="age" id="age" type="number" placeholder="67" required/>
        </div>
        <div className="form-group">
          <label htmlFor="savings">How much you have saved for retirement outside of Dream Forward Financial.</label>
          <input name="savings" ref="savings" placeholder="0" required/>
        </div>
        <input type="submit"/>

      </form>
    </div>;
  }
}