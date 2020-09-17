import React from "react";
import ProfileDashboard from "./ProfileDashboard";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
// import Button from "@material-ui/core/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./profile.css";

import Gender1 from "../Options/Gender/Gender1";
import Gender2 from "../Options/Gender/Gender2";
import Gender3 from "../Options/Gender/Gender3";
import Gender4 from "../Options/Gender/Gender4";

import Orientation1 from "../Options/Orientation/Orientation1";
import Orientation2 from "../Options/Orientation/Orientation2";
import Orientation3 from "../Options/Orientation/Orientation3";
import Orientation4 from "../Options/Orientation/Orientation4";

import Ethnicity1 from "../Options/Ethnicity/Ethnicity1";
import Ethnicity2 from "../Options/Ethnicity/Ethnicity2";
import Ethnicity3 from "../Options/Ethnicity/Ethnicity3";
import Ethnicity4 from "../Options/Ethnicity/Ethnicity4";
import Ethnicity5 from "../Options/Ethnicity/Ethnicity5";
import Ethnicity6 from "../Options/Ethnicity/Ethnicity6";
import Ethnicity7 from "../Options/Ethnicity/Ethnicity7";

import Offspring1 from "../Options/Offspring/Offspring1";
import Offspring2 from "../Options/Offspring/Offspring2";

import WantOffspring1 from "../Options/WantOffspring/WantOffspring1";
import WantOffspring2 from "../Options/WantOffspring/WantOffspring2";
import WantOffspring3 from "../Options/WantOffspring/WantOffspring3";

import HavePets1 from "../Options/HavePets/HavePets1";
import HavePets2 from "../Options/HavePets/HavePets2";
import HavePets3 from "../Options/HavePets/HavePets3";

import WantPets1 from "../Options/WantPets/WantPets1";
import WantPets2 from "../Options/WantPets/WantPets2";
import WantPets3 from "../Options/WantPets/WantPets3";

import Education1 from "../Options/Education/Education1";
import Education2 from "../Options/Education/Education2";
import Education3 from "../Options/Education/Education3";
import Education4 from "../Options/Education/Education4";
import Education5 from "../Options/Education/Education5";
import Education6 from "../Options/Education/Education6";
import Education7 from "../Options/Education/Education7";

import Job1 from "../Options/Job/Job1";
import Job2 from "../Options/Job/Job2";
import Job3 from "../Options/Job/Job3";
import Job4 from "../Options/Job/Job4";
import Job5 from "../Options/Job/Job5";
import Job6 from "../Options/Job/Job6";
import Job7 from "../Options/Job/Job7";
import Job8 from "../Options/Job/Job8";
import Job9 from "../Options/Job/Job9";
import Job10 from "../Options/Job/Job10";
import Job11 from "../Options/Job/Job11";
import Job12 from "../Options/Job/Job12";
import Job13 from "../Options/Job/Job13";
import Job14 from "../Options/Job/Job14";
import Job15 from "../Options/Job/Job15";
import Job16 from "../Options/Job/Job16";
import Job17 from "../Options/Job/Job17";
import Job18 from "../Options/Job/Job18";
import Job19 from "../Options/Job/Job19";

class Profile extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    phone: "",
    // email: "",
    age: "",
    height: "",
    gender: "",
    orientation: "",
    ethnicity: "",
    offspring: "",
    wantOffspring: "",
    havePets: "",
    wantPets: "",
    education: "",
    job: "",
    religion: "",
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
  // handleDateChange = (value) => {
  //   console.log(value);
  //   this.setState({ age: value });
  // };
  handleEthnicityChange = (value) => {
    console.log(value);
    this.setState({ ethnicity: value });
  };
  handleOrientationChange = (value) => {
    console.log(value);
    this.setState({ orientation: value });
  };
  handleOffspringChange = (value) => {
    console.log(value);
    this.setState({ offspring: value });
  };
  handleWantOffspringChange = (value) => {
    console.log(value);
    this.setState({ wantOffspring: value });
  };
  handleHavePetsChange = (value) => {
    console.log(value);
    this.setState({ havePets: value });
  };
  handleWantPetsChange = (value) => {
    console.log(value);
    this.setState({ wantPets: value });
  };
  handleEducationChange = (value) => {
    console.log(value);
    this.setState({ education: value });
  };
  handleJobChange = (value) => {
    console.log(value);
    this.setState({ job: value });
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
                label="Phone number"
                placeholder="555-555-5555"
                name="phone"
                value={this.state.phone}
                onChange={this.handleChange}
              />
            </form>
          </Box>
        </Box>
      );
    }
    // else if (this.state.counter === 2) {
    //   result = (
    //     <div></div>
    //     <Box display="flex" justifyContent="center" m={1} p={1}>
    //       <Box>
    //         <h1>What is your email?</h1>
    //         <TextField
    //           label="Email"
    //           placeholder="name@email.com"
    //           name="email"
    //           value={this.state.email}
    //           onChange={this.handleChange}
    //         />
    //       </Box>
    //     </Box>
    //   );
    // }
    else if (this.state.counter === 2) {
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
    } else if (this.state.counter === 3) {
      result = (
        <Box display="flex" justifyContent="center" m={1} p={1}>
          <Box>
            <h1>How tall are you? (inches)</h1>
            <TextField
              label="Height"
              placeholder="72"
              name="height"
              value={this.state.height}
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
            <h1>Do you have any children?</h1>
            <Container fluid="md" className="text-center">
              <Row>
                <Row className="text-center">
                  <Col xs={6} md={6}>
                    <Offspring1
                      value="Yes"
                      handleOffspring={this.handleOffspringChange}
                    ></Offspring1>
                  </Col>
                  <Col xs={6} md={6}>
                    <Offspring2
                      value="No"
                      handleOffspring={this.handleOffspringChange}
                    ></Offspring2>
                  </Col>
                </Row>
              </Row>
            </Container>
            <br></br>
            <h1>Do you want more children than you currently have?</h1>
            <Container fluid="md" className="text-center">
              <Row>
                <Row className="text-center">
                  <Col xs={6} md={4}>
                    <WantOffspring1
                      value="Yes"
                      handleWantOffspring={this.handleWantOffspringChange}
                    ></WantOffspring1>
                  </Col>
                  <Col xs={6} md={4}>
                    <WantOffspring2
                      value="No"
                      handleWantOffspring={this.handleWantOffspringChange}
                    ></WantOffspring2>
                  </Col>
                  <Col xs={6} md={4}>
                    <WantOffspring3
                      value="Maybe"
                      handleWantOffspring={this.handleWantOffspringChange}
                    ></WantOffspring3>
                  </Col>
                </Row>
              </Row>
            </Container>
          </Box>
        </Box>
      );
    } else if (this.state.counter === 8) {
      result = (
        <Box display="flex" justifyContent="center" m={1} p={1}>
          <Box>
            <h1>I have...</h1>
            <Container fluid="md" className="text-center">
              <Row>
                <Row className="text-center">
                  <Col xs={6} md={4}>
                    <HavePets1
                      value="Dogs"
                      handleHavePets={this.handleHavePetsChange}
                    ></HavePets1>
                  </Col>
                  <Col xs={6} md={4}>
                    <HavePets2
                      value="Cats"
                      handleHavePets={this.handleHavePetsChange}
                    ></HavePets2>
                  </Col>
                  <Col xs={6} md={4}>
                    <HavePets3
                      value="No pets"
                      handleHavePets={this.handleHavePetsChange}
                    ></HavePets3>
                  </Col>
                </Row>
              </Row>
            </Container>
            <br></br>
            <h1>I want...</h1>
            <Container fluid="md" className="text-center">
              <Row>
                <Row className="text-center">
                  <Col xs={6} md={4}>
                    <WantPets1
                      value="Dogs"
                      handleWantPets={this.handleWantPetsChange}
                    ></WantPets1>
                  </Col>
                  <Col xs={6} md={4}>
                    <WantPets2
                      value="Cats"
                      handleWantPets={this.handleWantPetsChange}
                    ></WantPets2>
                  </Col>
                  <Col xs={6} md={4}>
                    <WantPets3
                      value="No more pets"
                      handleWantPets={this.handleWantPetsChange}
                    ></WantPets3>
                  </Col>
                </Row>
              </Row>
            </Container>
          </Box>
        </Box>
      );
    } else if (this.state.counter === 9) {
      result = (
        <Box display="flex" justifyContent="center" m={1} p={1}>
          <Box>
            <h1>What is the highest level of education you have completed?</h1>
            <Container fluid="md" className="text-center">
              <Row>
                <Row className="text-center">
                  <Col xs={6} md={4}>
                    <Education1
                      value="High school"
                      handleEducation={this.handleEducationChange}
                    ></Education1>
                  </Col>
                  <Col xs={6} md={4}>
                    <Education2
                      value="Two-year college"
                      handleEducation={this.handleEducationChange}
                    ></Education2>
                  </Col>
                  <Col xs={6} md={4}>
                    <Education3
                      value="College/university"
                      handleEducation={this.handleEducationChange}
                    ></Education3>
                  </Col>
                  <Col xs={6} md={4}>
                    <Education4
                      value="Masters program"
                      handleEducation={this.handleEducationChange}
                    ></Education4>
                  </Col>
                  <Col xs={6} md={4}>
                    <Education5
                      value="PhD"
                      handleEducation={this.handleEducationChange}
                    ></Education5>
                  </Col>
                  <Col xs={6} md={4}>
                    <Education6
                      value="Law school"
                      handleEducation={this.handleEducationChange}
                    ></Education6>
                  </Col>
                  <Col xs={6} md={4}>
                    <Education7
                      value="Space camp"
                      handleEducation={this.handleEducationChange}
                    ></Education7>
                  </Col>
                </Row>
              </Row>
            </Container>
          </Box>
        </Box>
      );
    } else if (this.state.counter === 10) {
      result = (
        <Box display="flex" justifyContent="center" m={1} p={1}>
          <Box>
            <h1>What best describes your career?</h1>
            <Container fluid="md" className="text-center">
              <Row>
                <Row className="text-center">
                  <Col xs={6} md={3}>
                    <Job1
                      value="clerical/administrative"
                      handleJob={this.handleJobChange}
                    ></Job1>
                  </Col>
                  <Col xs={6} md={3}>
                    <Job2
                      value="artistic/musical/writer"
                      handleJob={this.handleJobChange}
                    ></Job2>
                  </Col>
                  <Col xs={6} md={3}>
                    <Job3
                      value="executive/management"
                      handleJob={this.handleJobChange}
                    ></Job3>
                  </Col>
                  <Col xs={6} md={3}>
                    <Job4
                      value="construction/craftsmanship"
                      handleJob={this.handleJobChange}
                    ></Job4>
                  </Col>
                  <Col xs={6} md={3}>
                    <Job5
                      value="education/academia"
                      handleJob={this.handleJobChange}
                    ></Job5>
                  </Col>
                  <Col xs={6} md={3}>
                    <Job6
                      value="entertainment/media"
                      handleJob={this.handleJobChange}
                    ></Job6>
                  </Col>
                  <Col xs={6} md={3}>
                    <Job7
                      value="banking/finance/real estate"
                      handleJob={this.handleJobChange}
                    ></Job7>
                  </Col>
                  <Col xs={6} md={3}>
                    <Job8
                      value="medical/health"
                      handleJob={this.handleJobChange}
                    ></Job8>
                  </Col>
                  <Col xs={6} md={3}>
                    <Job9
                      value="hospitality/travel"
                      handleJob={this.handleJobChange}
                    ></Job9>
                  </Col>
                  <Col xs={6} md={3}>
                    <Job10
                      value="law/legal services"
                      handleJob={this.handleJobChange}
                    ></Job10>
                  </Col>
                  <Col xs={6} md={3}>
                    <Job11
                      value="sales/marketing/biz dev"
                      handleJob={this.handleJobChange}
                    ></Job11>
                  </Col>
                  <Col xs={6} md={3}>
                    <Job12
                      value="political/government"
                      handleJob={this.handleJobChange}
                    ></Job12>
                  </Col>
                  <Col xs={6} md={3}>
                    <Job13
                      value="science/tech/engineering"
                      handleJob={this.handleJobChange}
                    ></Job13>
                  </Col>
                  <Col xs={6} md={3}>
                    <Job14
                      value="student"
                      handleJob={this.handleJobChange}
                    ></Job14>
                  </Col>
                  <Col xs={6} md={3}>
                    <Job15
                      value="computer/hardware/software"
                      handleJob={this.handleJobChange}
                    ></Job15>
                  </Col>
                  <Col xs={6} md={3}>
                    <Job16
                      value="transportation"
                      handleJob={this.handleJobChange}
                    ></Job16>
                  </Col>
                  <Col xs={6} md={3}>
                    <Job17
                      value="other"
                      handleJob={this.handleJobChange}
                    ></Job17>
                  </Col>
                  <Col xs={6} md={3}>
                    <Job18
                      value="unemployed"
                      handleJob={this.handleJobChange}
                    ></Job18>
                  </Col>
                  <Col xs={6} md={3}>
                    <Job19
                      value="retired"
                      handleJob={this.handleJobChange}
                    ></Job19>
                  </Col>
                </Row>
              </Row>
            </Container>
          </Box>
        </Box>
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
            // email={this.state.email}
            age={this.state.age}
            height={this.state.height}
            gender={this.state.gender}
            orientation={this.state.orientation}
            ethnicity={this.state.ethnicity}
            offspring={this.state.offspring}
            wantOffspring={this.state.wantOffspring}
            havePets={this.state.havePets}
            wantPets={this.state.wantPets}
            education={this.state.education}
            job={this.state.job}
            religion={this.state.religion}
            politics={this.state.politics}
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
