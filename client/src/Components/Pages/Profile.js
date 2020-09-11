import React from "react";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import ProfileDashboard from "./ProfileDashboard";

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
    // console.log(event.target, name, value);
  };
  render() {
    var result;
    if (this.state.counter === 0) {
      // <label>
      //   name
      // </label>
      result = (
        <div>
          <input
            value={this.state.firstName}
            placeholder="first name"
            name="firstName"
            onChange={this.handleChange}
          ></input>
          <input
            name="lastName"
            value={this.state.lastName}
            placeholder="last name"
            onChange={this.handleChange}
          ></input>
        </div>
      );
      // <input name={this.state.lastName} placeholder="last name" onChange={this.handleChange}></input>
    } else if (this.state.counter === 1) {
      result = (
        <input
          name="phone"
          value={this.state.phone}
          placeholder="phone number"
          onChange={this.handleChange}
        ></input>
      );
      // add all the categories as else ifs
    } else if (this.state.counter === 2) {
      result = (
        <input
          name="email"
          type="email"
          value={this.state.email}
          placeholder="email"
          onChange={this.handleChange}
        ></input>
      );
    } else if (this.state.counter === 3) {
      result = (
        <input
          name="birthday"
          type="date"
          value={this.state.birthday}
          placeholder="birthday"
          onChange={this.handleChange}
        ></input>
      );
    } else {
      result = (
        <input
          name="phone"
          value={this.state.phone}
          placeholder="phone"
          onChange={this.handleChange}
        ></input>
      );
    }
    return (
      <div className="profile">
        <h1>Profile</h1>

        {this.state.counter === 4 ? (
          // change 2 to the last number of all the categories, remember it starts at 0
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
