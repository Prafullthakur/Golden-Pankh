import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { List, ListItem } from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton";

export class Confirm extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      firstName,
      lastName,
      email,
      occupation,
      city,
      bio,
    } = this.props.values;

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <List>
            <ListItem primaryText="Your First Name" secondaryText={firstName} />
            <ListItem primaryText="Your Last Name" secondaryText={lastName} />
            <ListItem primaryText="Your Email" secondaryText={email} />
            <ListItem
              primaryText="Your Occupation"
              secondaryText={occupation}
            />
            <ListItem primaryText="Your City Name" secondaryText={city} />
            <ListItem primaryText="Your Bio" secondaryText={bio} />
          </List>
          <br />
          <RaisedButton
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
          <RaisedButton
            style={styles.button}
            secondary={true}
            label="Back"
            onClick={this.back}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15,
  },
};

export default Confirm;
