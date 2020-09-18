import Button from "@material-ui/core/Button";
import axios from "axios";
import React from "react";

class ProfileDashboard extends React.Component {
  state = {
    firstName: this.props.firstName,
    lastName: this.props.lastName,
    phone: this.props.phone,
    location: this.props.location,
    age: this.props.age,
    height: this.props.height,
    gender: this.props.gender,
    orientation: this.props.orientation,
    ethnicity: this.props.ethnicity,
    offspring: this.props.offspring,
    wantOffspring: this.props.wantOffspring,
    havePets: this.props.havePets,
    wantPets: this.props.wantPets,
    education: this.props.education,
    job: this.props.job,
    religion: this.props.religion,
    diet: this.props.diet,
    drinks: this.props.drinks,
    drugs: this.props.drugs,
    smokes: this.props.smokes,
    profile_image: this.props.profile_image,
  };
  componentDidMount = () => {
    console.log(this.props);
  };
  handleChange = (event) => {
    var name = event.target.name;
    var value = event.target.value;
    this.setState({
      [name]: value,
    });
  };
  saveProfile = () => {
    // console.log(this.state);
    const profileRec = {
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      phone: this.state.phone,
      location: this.state.location,
      age: this.state.age,
      diet: this.state.diet,
      drinks: this.state.drinks,
      drugs: this.state.drugs,
      education: this.state.education,
      ethnicity: this.state.ethnicity,
      height: this.state.height,
      job: this.state.job,
      offspring: this.state.offspring,
      orientation: this.state.orientation,
      religion: this.state.religion,
      sex: this.state.gender,
      smokes: this.state.smokes,
      profile_image: this.state.profile_image,
    };
    console.log(profileRec);
    axios.post("/profile/new", profileRec).then((saveRec) => {
      console.log("Profile Updated");
    });
  };

  render() {
    return (
      <div className="proDashMargin">
        <h1>Profile</h1>
        <form className="centerForm">
          <span>Name &nbsp;</span>
          <input
            name="firstName"
            onChange={this.handleChange}
            value={this.state.firstName}
            size="8"
            style={{ fontSize: "24px", fontWeight: "bold" }}
          />
          <input
            name="lastName"
            onChange={this.handleChange}
            value={this.state.lastName}
            size="8"
            style={{ fontSize: "24px", fontWeight: "bold" }}
          />
          <input
            name="age"
            onChange={this.handleChange}
            value={this.state.age}
            size="2"
            maxlength="2"
            style={{ fontSize: "24px", fontWeight: "bold" }}
          />
          <br />
          <span>Gender </span>
          <input
            name="gender"
            onChange={this.handleChange}
            value={this.state.gender}
          />
          <br />
          <span>Number </span>
          <input
            name="phone"
            onChange={this.handleChange}
            value={this.state.phone}
            style={{ width: "auto" }}
          />
          <br />
          <span>Location </span>
          <input
            name="location"
            onChange={this.handleChange}
            value={this.state.location}
          />
          <br />
          <span>Orientation </span>
          <input
            name="orientation"
            onChange={this.handleChange}
            value={this.state.orientation}
          />
          <br />
          <span>Ethnicity </span>
          <input
            name="ethnicity"
            onChange={this.handleChange}
            value={this.state.ethnicity}
          />
          <br />
          <span>Height </span>
          <input
            name="height"
            onChange={this.handleChange}
            value={this.state.height}
            size="2"
          />
          <br />
          <span>Current Offspring </span>
          <input
            name="offspring"
            onChange={this.handleChange}
            value={this.state.offspring}
          />
          <br />
          <span>Want Offspring </span>
          <input
            name="wantOffspring"
            onChange={this.handleChange}
            value={this.state.wantOffspring}
          />
          <br />
          <span>Have Pets </span>
          <input
            name="havePets"
            onChange={this.handleChange}
            value={this.state.havePets}
          />
          <br />
          <span>Want Pets </span>
          <input
            name="wantPets"
            onChange={this.handleChange}
            value={this.state.wantPets}
          />
          <br />
          <span>Education </span>
          <input
            name="education"
            onChange={this.handleChange}
            value={this.state.education}
          />
          <br />
          <span>Job</span>
          <input
            name="job"
            onChange={this.handleChange}
            value={this.state.job}
          />
          <br />
          <span>Religion</span>
          <input
            name="religion"
            onChange={this.handleChange}
            value={this.state.religion}
          />
          <br />
          <span>Diet</span>
          <input
            name="diet"
            onChange={this.handleChange}
            value={this.state.diet}
          />
          <br />
          <span>Drinks</span>
          <input
            name="drinks"
            onChange={this.handleChange}
            value={this.state.drinks}
          />
          <br />
          <span>Drugs</span>
          <input
            name="drugs"
            onChange={this.handleChange}
            value={this.state.drugs}
          />
          <br />
          <span>Smokes</span>
          <input
            name="smokes"
            onChange={this.handleChange}
            value={this.state.smokes}
          />
        </form>

        <Button
          variant="contained"
          color="primary"
          disableElevation
          onClick={this.saveProfile}
          style={{ textAlign: "center" }}
        >
          Save Profile
        </Button>
      </div>
    );
  }
}

export default ProfileDashboard;
