import React from "react";
import auth from "../services/auth.js"
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
      .then(()=>{
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
    return <form onSubmit={this.login}>
      <Error message={this.state.errorMessage} />
      <input type="email" placeholder="Email" ref="email" required/>
      <input type="password" placeholder="Password" ref="password" required/>
      <input type="submit" value={this.state.saving ? 'Logging In..' : 'Login'} disabled={this.state.saving}/>

      <div>
        Not yet registered?
        <Link to="/register">Register</Link>
      </div>
    </form>;
  }
}