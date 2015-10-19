import React from "react";
import auth from "services/auth.js"
import Error from "./error.jsx"
import { Link } from 'react-router'

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: null,
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
        console.log('Login response', response);
        this.props.history.pushState(null, '/dashboard');
      })
      .catch((err)=>{
        this.setState({
          saving: false,
          errorMessage: err.message
        });
      });
  };

  render() {
    return <form onSubmit={this.login} id="loginForm">
      <Error message={this.state.errorMessage} />
      <div className="form-group">
        <label className="sr-only" htmlFor="email">Email</label>
        <input className="form-control" id="email" type="email" placeholder="Email" ref="email" required/>
      </div>
      <div className="form-group">
        <label className="sr-only" htmlFor="password">Password</label>
        <input className="form-control" id="password" type="password" placeholder="Password" ref="password" required/>
      </div>
      <input className="btn btn-primary" type="submit" value={this.state.saving ? 'Logging In..' : 'Login'} disabled={this.state.saving}/>
      <div className="register">
        Not yet registered? <Link to="/register">Register</Link>
      </div>
    </form>;
  }
}