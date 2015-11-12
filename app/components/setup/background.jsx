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
            <h3 className="card-title">Background</h3>
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
                <div className="text-right">
                  <LoadingButton label="Next" className="btn btn-primary" type="submit"/>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>;
  }
}