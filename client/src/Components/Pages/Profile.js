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
// import Grid from "@material-ui/core/Grid";
// import Options from "../Grid/Options";
import Gender1 from "../Options/Gender1";
import Gender2 from "../Options/Gender2";
import Gender3 from "../Options/Gender3";
import Gender4 from "../Options/Gender4";
import Gender5 from "../Options/Gender5";
import Gender6 from "../Options/Gender6";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { makeStyles } from "@material-ui/core/styles";

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
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          m={1}
          p={1}
        >
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
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          m={1}
          p={1}
        >
          <Box>
            <h1>What is your phone number?</h1>
            <form>
              <TextField
                label="555-555-5555"
                name="phone"
                value={this.state.phone}
                onChange={this.handleChange}
              />
            </form>
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
            <h1 className="text-center">How do you self-identify?</h1>
            <Container fluid="md" className="text-center">
              <Row>
                <Row className="text-center">
                  <Col xs={6} md={4}>
                    <Gender1></Gender1>
                  </Col>
                  <Col xs={6} md={4}>
                    <Gender2></Gender2>
                  </Col>
                  <Col xs={6} md={4}>
                    <Gender3></Gender3>
                  </Col>
                  <Col xs={6} md={4}>
                    <Gender4></Gender4>
                  </Col>
                  <Col xs={6} md={4}>
                    <Gender5></Gender5>
                  </Col>
                  <Col xs={6} md={4}>
                    <Gender6></Gender6>
                  </Col>
                </Row>
              </Row>
            </Container>

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
          <h1>How would you describe your ethnicity?</h1>
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
              mx={7}
              mt={30}
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
