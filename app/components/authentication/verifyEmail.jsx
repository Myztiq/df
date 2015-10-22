import React from "react";
import Error from "components/utils/error.jsx"
import auth from "services/auth.js"

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
  }

  componentDidMount = () => {
    auth.verifyEmail(this.props.params.code)
      .then(()=>{
        this.props.history.pushState(null, '/setup/background');
      })
      .catch((err)=>{
        this.setState({
          error: err
        });
      });
  };


  render() {
    return <div id="register" className="center">
      <div className="well text-center">
        {!this.state.error && <p>Verifying your email...</p>}
        <Error error={this.state.error} />
      </div>
    </div>;
  }
}