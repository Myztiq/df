import React from "react";
import auth from "services/auth.js"
import Error from "components/utils/error.jsx"
import { Link } from 'react-router'
import LoadingButton from "../utils/loadingButton.jsx"

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      saving: false
    };
  }

  register = (event) => {
    event.preventDefault();
    var params = {
      email: this.refs.email.value,
      password: this.refs.password.value,
      dob: this.refs.dob.value,
      ssn: this.refs.ssn.value
    };
    this.setState({saving: true});
    auth.register(params)
      .then(()=>{
        this.props.history.pushState(null, '/setup/background');
      })
      .catch((err)=>{
        this.setState({
          error: err,
          saving: false
        });
      });
  };

  render() {
    return <div id="register" className="center">
      <form onSubmit={this.register} className="well" id="registerForm">
        <Error error={this.state.error} />
        <div className="form-group">
          <input className="form-control" type="email" placeholder="Email" ref="email" required/>
        </div>
        <div className="form-group">
          <input className="form-control" type="text" placeholder="Social Security Number" ref="ssn" required/>
        </div>
        <div className="form-group">
          <input className="form-control" type="date" placeholder="Birthday" ref="dob" required/>
        </div>
        <div className="form-group">
          <input className="form-control" type="password" placeholder="Password" ref="password" required/>
        </div>
        <LoadingButton label="Register" saving={this.state.saving} savingText="Registering.." className="btn btn-primary" type="submit"/>
        <div className="login">
          Already registered? <Link to="/login">Login</Link>
        </div>
      </form>
    </div>;
  }
}