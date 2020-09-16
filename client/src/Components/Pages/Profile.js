import React from "react";
import ProfileDashboard from "./ProfileDashboard";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import TextField from "@material-ui/core/TextField";
// import DatePicker from "../Inputs/DatePicker";
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
import Gender1 from "../Options/Gender/Gender1";
import Gender2 from "../Options/Gender/Gender2";
import Gender3 from "../Options/Gender/Gender3";
import Gender4 from "../Options/Gender/Gender4";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Ethnicity1 from "../Options/Ethnicity/Ethnicity1";
import Ethnicity2 from "../Options/Ethnicity/Ethnicity2";
import Ethnicity3 from "../Options/Ethnicity/Ethnicity3";
import Ethnicity4 from "../Options/Ethnicity/Ethnicity4";
import Ethnicity5 from "../Options/Ethnicity/Ethnicity5";
import Ethnicity6 from "../Options/Ethnicity/Ethnicity6";
import Ethnicity7 from "../Options/Ethnicity/Ethnicity7";
import Slider from "@material-ui/core/Slider";
import Orientation1 from "../Options/Orientation/Orientation1";
import Orientation2 from "../Options/Orientation/Orientation2";
import Orientation3 from "../Options/Orientation/Orientation3";
import Orientation4 from "../Options/Orientation/Orientation4";

import { makeStyles } from "@material-ui/core/styles";

class Profile extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    age: "",
    gender: "",
    orientation: "",
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
  handleGenderChange = (value) => {
    console.log(value);
    this.setState({ gender: value });
  };
  handleDateChange = (value) => {
    console.log(value);
    this.setState({ birthday: value });
  };
  handleEthnicityChange = (value) => {
    console.log(value);
    this.setState({ ethnicity: value });
  };
  handleOrientationChange = (value) => {
    console.log(value);
    this.setState({ orientation: value });
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
            <h1>How old are you?</h1>
            <TextField
              label="Age"
              name="age"
              value={this.state.age}
              onChange={this.handleChange}
            />
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
                    <Gender1
                      value="Woman"
                      handleGender={this.handleGenderChange}
                    ></Gender1>
                  </Col>
                  <Col xs={6} md={4}>
                    <Gender2
                      value="Man"
                      handleGender={this.handleGenderChange}
                    ></Gender2>
                  </Col>
                  <Col xs={6} md={4}>
                    <Gender3
                      value="Non-conforming"
                      handleGender={this.handleGenderChange}
                    ></Gender3>
                  </Col>
                  <Col xs={6} md={4}>
                    <Gender4
                      value="Other"
                      handleGender={this.handleGenderChange}
                    ></Gender4>
                  </Col>
                </Row>
              </Row>
            </Container>
          </Box>
        </Box>
      );
    } else if (this.state.counter === 5) {
      result = (
        <Box display="flex" justifyContent="center" m={1} p={1}>
          <Box>
            <h1>What best describes your orientation?</h1>
            <Container fluid="md" className="text-center">
              <Row>
                <Row className="text-center">
                  <Col xs={6} md={4}>
                    <Orientation1
                      value="Straight"
                      handleOrientation={this.handleOrientationChange}
                    ></Orientation1>
                  </Col>
                  <Col xs={6} md={4}>
                    <Orientation2
                      value="Gay"
                      handleOrientation={this.handleOrientationChange}
                    ></Orientation2>
                  </Col>
                  <Col xs={6} md={4}>
                    <Orientation3
                      value="Bisexual"
                      handleOrientation={this.handleOrientationChange}
                    ></Orientation3>
                  </Col>
                  <Col xs={6} md={4}>
                    <Orientation4
                      value="Other"
                      handleOrientation={this.handleOrientationChange}
                    ></Orientation4>
                  </Col>
                </Row>
              </Row>
            </Container>
          </Box>
        </Box>
      );
    } else if (this.state.counter === 6) {
      result = (
        <Box display="flex" justifyContent="center" m={1} p={1}>
          <Box>
            <h1>How would you describe your ethnicity?</h1>
            <Container fluid="md" className="text-center">
              <Row>
                <Row className="text-center">
                  <Col xs={6} md={4}>
                    <Ethnicity1
                      value="Native American"
                      handleEthnicity={this.handleEthnicityChange}
                    ></Ethnicity1>
                  </Col>
                  <Col xs={6} md={4}>
                    <Ethnicity2
                      value="Black"
                      handleEthnicity={this.handleEthnicityChange}
                    ></Ethnicity2>
                  </Col>
                  <Col xs={6} md={4}>
                    <Ethnicity3
                      value="Asian"
                      handleEthnicity={this.handleEthnicityChange}
                    ></Ethnicity3>
                  </Col>
                  <Col xs={6} md={4}>
                    <Ethnicity4
                      value="Hispanic/Latin"
                      handleEthnicity={this.handleEthnicityChange}
                    ></Ethnicity4>
                  </Col>
                  <Col xs={6} md={4}>
                    <Ethnicity5
                      value="Pacific Islander"
                      handleEthnicity={this.handleEthnicityChange}
                    ></Ethnicity5>
                  </Col>
                  <Col xs={6} md={4}>
                    <Ethnicity6
                      value="White"
                      handleEthnicity={this.handleEthnicityChange}
                    ></Ethnicity6>
                  </Col>
                  <Col xs={6} md={4}>
                    <Ethnicity7
                      value="Other"
                      handleEthnicity={this.handleEthnicityChange}
                    ></Ethnicity7>
                  </Col>
                </Row>
              </Row>
            </Container>
          </Box>
        </Box>
      );
    } else if (this.state.counter === 7) {
      result = (
        <Box display="flex" justifyContent="center" m={1} p={1}>
          <Box>
            <h1>How would you describe your body type?</h1>
            <Slider></Slider>
            {/* <input
            name="body"
            placeholder="body"
            value={this.state.body}
            onChange={this.handleChange}
          ></input> */}
          </Box>
        </Box>
      );
    } else if (this.state.counter === 8) {
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
    } else if (this.state.counter === 9) {
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
    } else if (this.state.counter === 10) {
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
    } else if (this.state.counter === 11) {
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
    } else if (this.state.counter === 12) {
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
        {this.state.counter === 14 ? (
          <ProfileDashboard
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            phone={this.state.phone}
            email={this.state.email}
            birthday={this.state.birthday}
            gender={this.state.gender}
            orientation={this.state.orientation}
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
              mt={30}
              // p={2}
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
