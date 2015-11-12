import React from "react";
import { Link } from 'react-router'
import 'components/setup/dashboard.scss'

export default class extends React.Component {
  render() {
    return <div>

      <div className="card card-block">
        <h3 className="card-header">Retirement</h3>
        <div className="card-body">
          <div className="row">
            <div className="col-xs-4">
              <div className="sub-card">
                <div className="title">I plan on saving</div>
                <div className="picker btn btn-secondary" data-toggle="modal" data-target="#savingsAmount">
                  10%
                  <i className="fa fa-caret-down"></i>
                </div>
                <div className="sub">$210 every 2 weeks</div>
              </div>
            </div>
            <div className="col-xs-4">
              <div className="sub-card">
                <div className="title">into</div>
                <div className="picker btn btn-secondary" data-toggle="modal" data-target="#fund">
                  Target Date Fund
                  <i className="fa fa-caret-down"></i>
                </div>
                <div className="sub">
                  <a href="foo">Fund Details</a>
                </div>
              </div>
            </div>
            <div className="col-xs-4">
              <div className="sub-card">
                <div className="title">retiring at age</div>
                <div className="picker btn btn-secondary">
                  67
                  <i className="fa fa-caret-down"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="btn btn-primary">Save</div>
          </div>
        </div>
      </div>

      <div className="card card-block">
        <div className="card-body">
          <div className="btn btn-secondary addAnother">
            <i className="fa fa-plus"></i>
            <span>Add another goal</span>
          </div>
        </div>
      </div>



      <div className="modal fade" id="fund"  role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                <span className="sr-only">Close</span>
              </button>
              <h4 className="modal-title" id="myModalLabel">Pick Your Fund</h4>
            </div>
            <div className="modal-body">

              <div className="btn btn-secondary fund-choice">
                <i className="fa fa-check-circle-o"></i>
                Target Date Fund
                <div className="help">I don't care, just do the smartest thing with my money.</div>
              </div>
              <div className="btn btn-secondary fund-choice">
                <i className="fa fa-circle-o"></i>
                Pick your risk level
                <div className="help">I want to learn what level of risk I should go with.</div>
              </div>
              <div className="btn btn-secondary fund-choice">
                <i className="fa fa-circle-o"></i>
                Advanced Mode
                <div className="help">I know what i'm doing, seeing a bunch of ticker symbols makes me happy.</div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="savingsAmount"  role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                <span className="sr-only">Close</span>
              </button>
              <h4 className="modal-title" id="myModalLabel">How much do you want to save</h4>
            </div>
            <div className="modal-body">


              <input type="number" defaultValue="10"/>%

              <div className="help">
                Your company is matching you up to $200 every paycheck.
              </div>

              <br/>
              <div className="alert alert-warning">
                <strong>Careful</strong> it looks like you are bringing your contribution down to a dangerously low level.
                <p>How can we help?</p>
                <ul>
                  <li><a href="foo">Foo 1</a></li>
                  <li><a href="foo">Foo 2</a></li>
                  <li><a href="foo">Foo 3</a></li>
                  <li><a href="foo">Foo 4</a></li>
                  <li><a href="foo">Foo 5</a></li>
                  <li><a href="foo">Foo 6</a></li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>



      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      Dashboard!

      <Link className="btn btn-primary" to="/setup">Setup</Link>
      <Link className="btn btn-primary" to="/login">Login</Link>
      <Link className="btn btn-primary" to="/register">Register</Link>
    </div>;
  }
}