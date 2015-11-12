import React from "react";

export default class extends React.Component {
  render() {

    return <div id="background">
      <div className="row">
        <div className="col-xs-6 col-xs-offset-3">
          <div className="card card-block">
            <h3 className="card-title">Retirement Checkup Results</h3>
            <div className="card-body">
              <p>
                Based on your age and how much you've already saved, you need to
                save 10% of your paycheck in order to be able to retire comfortably.
              </p>
              <p>Next, you'll get to choose your investment mix.</p>
              <div className="btn btn-secondary" onClick={this.props.back}>Back</div>
              <div className="btn btn-primary pull-right" onClick={this.props.save}>Next</div>
            </div>
          </div>
        </div>
      </div>
    </div>;
  }
}