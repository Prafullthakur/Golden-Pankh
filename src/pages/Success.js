import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";

export class Success extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <h1>Thanks For Your Submission</h1>
          <p>You will get email with further details.</p>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Success;
