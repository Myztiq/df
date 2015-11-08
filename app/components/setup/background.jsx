import React from "react";
import LoadingButton from "components/utils/loadingButton.jsx";

export default class extends React.Component {
  submit = (event) => {
    event.preventDefault();
    this.props.save({
      age: this.refs.age.value,
      savings: this.refs.savings.value
    });
  };

  render() {
    return <div id="background">
      <div className="row">
        <div className="col-xs-6 col-xs-offset-3">
          <div className="card card-block">
            <h1 className="card-title">Background</h1>
            <div className="card-subtitle text-muted">Some basic information</div>
            <div className="card-body">
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
            </div>
          </div>
        </div>
      </div>
    </div>;
  }
}