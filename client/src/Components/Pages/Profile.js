import React from "react";
import ProfileDashboard from "./ProfileDashboard";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import TextField from "@material-ui/core/TextField";
import DatePicker from "../Inputs/DatePicker";
import Button from "@material-ui/core/Button";
import "./profile.css";
// import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
// import Box from "../Box/Box";
// import styled from "styled-components";
// import { spacing } from "@material-ui/system";
// import FixedColumnLayout from "../Grid/FixedColumnLayout";
// import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
// import Options from "../Grid/Options";
import Gender1 from "../Options/Gender1";
import Gender2 from "../Options/Gender2";
import Gender3 from "../Options/Gender3";
import Gender4 from "../Options/Gender4";
import Gender5 from "../Options/Gender5";
import Gender6 from "../Options/Gender6";

class Profile extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    birthday: "",
    gender: "",
    ethnicity: "",
    body: "",
    education: "",
    religion: "",
    politics: "",
    children: "",
    substances: "",
    interest: "",
    counter: 0,
  };
  handleLeftCounter = () => {
    var counter = this.state.counter;
    if (counter >= 1) {
      counter--;
      this.setState({ counter: counter });
    }
  };
  handleRightCounter = () => {
    var counter = this.state.counter;
    counter++;
    this.setState({ counter: counter });
  };
  handleChange = (event) => {
    var name = event.target.name;
    var value = event.target.value;
    this.setState({
      [name]: value,
    });
  };
  render() {
    var result;
    if (this.state.counter === 0) {
      result = (
        <Box display="flex" justifyContent="center" m={1} p={1}>
          <Box>
            <h1>What is your name?</h1>
            <form>
              <TextField
                label="First name"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleChange}
              />
              <br></br>
              <TextField
                label="Last name"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleChange}
              />
            </form>
          </Box>
        </Box>
      );
    } else if (this.state.counter === 1) {
      result = (
        <Box display="flex" justifyContent="center" m={1} p={1}>
          <Box>
            <h1>What is your phone number?</h1>
            <TextField
              label="555-555-5555"
              name="phone"
              value={this.state.phone}
              onChange={this.handleChange}
            />
          </Box>
        </Box>
      );
    } else if (this.state.counter === 2) {
      result = (
        <Box display="flex" justifyContent="center" m={1} p={1}>
          <Box>
            <h1>What is your email?</h1>
            <TextField
              label="name@email.com"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </Box>
        </Box>
      );
    } else if (this.state.counter === 3) {
      result = (
        <Box display="flex" justifyContent="center" m={1} p={1}>
          <Box>
            <h1>When is your birthday?</h1>
            <br></br>
            <DatePicker />
          </Box>
        </Box>
      );
    } else if (this.state.counter === 4) {
      result = (
        <Box display="flex" justifyContent="center" m={1} p={1}>
          <Box>
            <h1>How do you self-identify?</h1>

            <div>
              <Grid id="top-row" container spacing={24}>
                <Grid item xs={20}>
                  <Gender1
                    value={this.state.gender}
                    onChange={this.handleChange}
                  ></Gender1>
                </Grid>

                <Grid item xs={18}>
                  <Gender2
                    value={this.state.gender}
                    onChange={this.handleChange}
                  ></Gender2>
                </Grid>

                <Grid item xs={18}>
                  <Gender3
                    value={this.state.gender}
                    onChange={this.handleChange}
                  ></Gender3>
                </Grid>
              </Grid>

              <Grid id="bottom-row" container spacing={24}>
                <Grid item xs={18}>
                  <Gender4
                    value={this.state.gender}
                    onChange={this.handleChange}
                  ></Gender4>
                </Grid>

                <Grid item xs={18}>
                  <Gender5
                    value={this.state.gender}
                    onChange={this.handleChange}
                  ></Gender5>
                </Grid>

                <Grid item xs={18}>
                  <Gender6
                    value={this.state.gender}
                    onChange={this.handleChange}
                  ></Gender6>
                </Grid>
              </Grid>
            </div>

            {/* <Box component="span" m={1} display="flex" flexWrap="wrap">
              <Button
                value={this.state.gender}
                onChange={this.handleChange}
                variant="contained"
                color="primary"
                disableElevation
              >
                Female
              </Button>
            </Box>

            <Box component="span" m={1} display="flex" flexWrap="wrap">
              <Button
                value={this.state.gender}
                onChange={this.handleChange}
                variant="contained"
                color="primary"
                disableElevation
              >
                Male
              </Button>
            </Box>

            <Box component="span" m={1} display="flex" flexWrap="wrap">
              <Button
                value={this.state.gender}
                onChange={this.handleChange}
                variant="contained"
                color="primary"
                disableElevation
              >
                Trans female
              </Button>
            </Box>

            <Box component="span" m={1} display="flex" flexWrap="wrap">
              <Button
                value={this.state.gender}
                onChange={this.handleChange}
                variant="contained"
                color="primary"
                disableElevation
              >
                Trans male
              </Button>
            </Box>

            <Box component="span" m={1} display="flex" flexWrap="wrap">
              <Button
                value={this.state.gender}
                onChange={this.handleChange}
                variant="contained"
                color="primary"
                disableElevation
              >
                Non-conforming
              </Button>
            </Box>

            <Box component="span" m={1} display="flex" flexWrap="wrap">
              <Button
                value={this.state.gender}
                onChange={this.handleChange}
                variant="contained"
                color="primary"
                disableElevation
              >
                Other
              </Button>
            </Box> */}
            {/* <input
              name="gender"
              placeholder="gender"
              value={this.state.gender}
              onChange={this.handleChange}
            ></input> */}
          </Box>
        </Box>
      );
    } else if (this.state.counter === 5) {
      result = (
        <div>
          <h1>How would you describe your ethnicty?</h1>
          <input
            name="ethnicity"
            placeholder="ethnicity"
            value={this.state.ethnicity}
            onChange={this.handleChange}
          ></input>
        </div>
      );
    } else if (this.state.counter === 6) {
      result = (
        <div>
          <h1>How would you describe your body type?</h1>
          <input
            name="body"
            placeholder="body"
            value={this.state.body}
            onChange={this.handleChange}
          ></input>
        </div>
      );
    } else if (this.state.counter === 7) {
      result = (
        <div>
          <h1>What is the highest level of education you have completed?</h1>
          <input
            name="education"
            placeholder="education"
            value={this.state.education}
            onChange={this.handleChange}
          ></input>
        </div>
      );
    } else if (this.state.counter === 8) {
      result = (
        <div>
          <h1>What is your religion?</h1>
          <input
            name="religion"
            placeholder="religion"
            value={this.state.religion}
            onChange={this.handleChange}
          ></input>
        </div>
      );
    } else if (this.state.counter === 9) {
      result = (
        <div>
          <input
            name="politics"
            placeholder="politics"
            value={this.state.politics}
            onChange={this.handleChange}
          ></input>
        </div>
      );
    } else if (this.state.counter === 10) {
      result = (
        <div>
          <input
            name="children"
            placeholder="children"
            value={this.state.children}
            onChange={this.handleChange}
          ></input>
        </div>
      );
    } else if (this.state.counter === 11) {
      result = (
        <div>
          <input
            name="substances"
            placeholder="substances"
            value={this.state.substances}
            onChange={this.handleChange}
          ></input>
        </div>
      );
    } else {
      result = (
        <div>
          <input
            name="interest"
            placeholder="interest"
            value={this.state.interest}
            onChange={this.handleChange}
          ></input>
        </div>
      );
    }
    return (
      <div className="profile">
        {this.state.counter === 13 ? (
          <ProfileDashboard
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            phone={this.state.phone}
            email={this.state.email}
            birthday={this.state.birthday}
            gender={this.state.gender}
            ethnicity={this.state.ethnicity}
            body={this.state.body}
            education={this.state.education}
            religion={this.state.religion}
            politics={this.state.politics}
            children={this.state.children}
            substances={this.state.substances}
            interest={this.state.interest}
          ></ProfileDashboard>
        ) : (
          <Box>
            {result}
            <Box
              id="navArrows"
              display="flex"
              justifyContent="center"
              alignItems="center"
              mx={5}
              mt={45}
              p={2}
            >
              {this.state.counter !== 0 ? (
                <NavigateBeforeIcon onClick={this.handleLeftCounter} id="left">
                  Left
                </NavigateBeforeIcon>
              ) : (
                <div></div>
              )}
              <NavigateNextIcon onClick={this.handleRightCounter} id="right">
                Right
              </NavigateNextIcon>
            </Box>
          </Box>
        )}
      </div>
    );
  }
}

export default Profile;
