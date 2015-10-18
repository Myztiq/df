import React from "react";
import auth from "services/auth.js"
import Error from "./error.jsx"
import { Link } from 'react-router'

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: null
    };
  }

  login = (event) => {
    event.preventDefault();
    var params = {
      email: this.refs.email.value,
      password: this.refs.password.value,
      ssn: this.refs.ssn.value
    };
    auth.register(params)
      .then(()=>{
        this.props.history.pushState(null, '/dashboard');
      })
      .catch((err)=>{
        this.setState({
          errorMessage: err.message
        });
      });
  };

  render() {
    return <form onSubmit={this.login}>
      <Error message={this.state.errorMessage} />
      <input type="email" placeholder="Email" ref="email" required/>
      <input type="text" placeholder="Social Security Number" ref="ssn" required/>
      <input type="password" placeholder="Password" ref="password" required/>
      <input type="submit" value="Register"/>

      <div>
        Already registered? <Link to="/login">Login</Link>
      </div>
    </form>;
  }
}