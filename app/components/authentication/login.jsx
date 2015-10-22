import React from "react";
import auth from "services/auth.js"
import Error from "components/utils/error.jsx"
import { Link } from 'react-router'
import LoadingButton from "components/utils/loadingButton.jsx"

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      saving: false
    };
  }

  login = (event) => {
    event.preventDefault();
    var params = {
      email: this.refs.email.value,
      password: this.refs.password.value
    };
    this.setState({saving: true});
    auth.login(params)
      .then((response)=>{
        this.props.history.pushState(null, '/dashboard');
      })
      .catch((err)=>{
        this.setState({
          saving: false,
          error: err
        });
      });
  };

  render() {
    return <div id="login" className="center">
      <form onSubmit={this.login} id="loginForm" className="well">
        <Error error={this.state.error} />
        <div className="form-group">
          <label className="sr-only" htmlFor="email">Email</label>
          <input className="form-control" id="email" type="email" placeholder="Email" ref="email" required/>
        </div>
        <div className="form-group">
          <label className="sr-only" htmlFor="password">Password</label>
          <input className="form-control" id="password" type="password" placeholder="Password" ref="password" required/>
        </div>
        <LoadingButton label="Login" saving={this.state.saving} savingText="Logging In.." className="btn btn-primary" type="submit"/>
        <div className="register">
          Not yet registered? <Link to="/register">Register</Link>
        </div>
      </form>
    </div>;
  }
}