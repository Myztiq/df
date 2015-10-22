import React from "react";

export default class extends React.Component {
  render() {
    return <div id="register" className="center">
      <div className="well text-center">
        <h2>Email Not Verified</h2>
        <div>You need to first verify your email to use Dream Forward Financial.</div>
        <div>An email has been sent please click the link inside.</div>
      </div>
    </div>;
  }
}