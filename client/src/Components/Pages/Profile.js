import React from "react";
import ProfileDashboard from "./ProfileDashboard";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
// import TextField from "../Inputs/TextField";
import TextField from "@material-ui/core/TextField";
import DatePicker from "../Inputs/DatePicker";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
// import CenteredGrid from "../Grid/CenteredGrid";
// import Grid from '@material-ui/core/Grid';
import AutoGrid from "../Grid/AutoGrid";
import CenteredGrid from "../Grid/CenteredGrid";

//delete any of the above commented files

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
          justifyContent="center"
          alignItems="center"
          m={1}
          p={1}
          bgcolor="background.paper"
        >
          <Box maxWidth="sm">
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

        // <Box
        //   display="flex"
        //   flexWrap="wrap"
        //   justifyContent="center"
        //   alignItems="center"
        // >
        //   <Container maxWidth="sm">
        //     <h1>What is your name?</h1>
        //     <form>
        //       <TextField
        //         label="First name"
        //         name="firstName"
        //         value={this.state.firstName}
        //         onChange={this.handleChange}
        //       />
        //       <br></br>
        //       <TextField
        //         label="Last name"
        //         name="lastName"
        //         value={this.state.lastName}
        //         onChange={this.handleChange}
        //       />
        //     </form>
        //   </Container>
        // </Box>
      );
    } else if (this.state.counter === 1) {
      result = (
        <div>
          <h1>What is your phone number?</h1>
          <TextField
            label="555-555-5555"
            name="phone"
            value={this.state.phone}
            onChange={this.handleChange}
          />
        </div>
      );
    } else if (this.state.counter === 2) {
      result = (
        <div>
          <h1>What is your email?</h1>
          <TextField
            label="Email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </div>
      );
    } else if (this.state.counter === 3) {
      result = (
        <div>
          <h1>When is your birthday?</h1>
          <DatePicker />
        </div>
      );
    } else if (this.state.counter === 4) {
      result = (
        <div>
          <h1>How do you self-identify?</h1>
          {/* <AutoGrid /> */}
          {/* <CenteredGrid /> */}

          <Container maxWidth="sm">
            <Button variant="contained" color="primary" disableElevation>
              Female
            </Button>
            <Button variant="contained" color="primary" disableElevation>
              Male
            </Button>
            <Button variant="contained" color="primary" disableElevation>
              Trans female
            </Button>
            <Button variant="contained" color="primary" disableElevation>
              Trans male
            </Button>
            <Button variant="contained" color="primary" disableElevation>
              Non-conforming
            </Button>
            <Button variant="contained" color="primary" disableElevation>
              Other
            </Button>
          </Container>

          {/* <Grid container spacing={3}>
              <Grid item xs>
                <Paper className={classes.paper} />
              </Grid>
              <Grid item xs>
                <Paper className={classes.paper}>xs</Paper>
              </Grid>
              <Grid item xs>
                <Paper className={classes.paper}>xs</Paper>
              </Grid>
            </Grid>

            <Grid container spacing={3}>
              <Grid item xs>
                <Paper className={classes.paper}>xs</Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.paper}>xs=6</Paper>
              </Grid>
              <Grid item xs>
                <Paper className={classes.paper}>xs</Paper>
              </Grid>
            </Grid> */}

          {/* <input
            name="gender"
            placeholder="gender"
            value={this.state.gender}
            onChange={this.handleChange}
          ></input> */}
        </div>
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
          <form>
            {result}
            <div className="navigation">
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
            </div>
          </form>
        )}
      </div>
    );
  }
}

export default Profile;
