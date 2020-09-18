import Button from "@material-ui/core/Button";
import axios from "axios";
import React from "react";

// import UserContext from "../../context/UserContext";

class ProfileDashboard extends React.Component {
  state = {
    first_name: this.first_name,
    last_name: this.last_name,
    mumble_email: this.mumble_email,
    age: this.age,
    body_type: this.body_type,
    diet: this.diet,
    drinks: this.drinks,
    drugs: this.drugs,
    education: this.education,
    ethnicity: this.ethnicity,
    height: this.height,
    income: this.income,
    job: this.job,
    location: this.location,
    offspring: this.offspring,
    orientation: this.orientation,
    pets: this.pets,
    religion: this.religion,
    sex: this.sex,
    smokes: this.smokes,
    status: this.status,
    profile_image: this.profile_image,
  };
  componentDidMount = () => {
    console.log(this.props);
  };
  handleChange = (event) => {
    event.preventDefault();
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };

  saveProfile = () => {
    // console.log(this.state);
    const profileRec = {
      _id: 3000,
      first_name: this.props.first_name,
      last_name: this.props.last_name,
      mumble_email: this.props.mumble_email,
      age: this.props.age,
      body_type: this.props.body_type,
      diet: this.props.diet,
      drinks: this.props.drinks,
      drugs: this.props.drugs,
      education: this.props.education,
      ethnicity: this.props.ethnicity,
      height: this.props.height,
      income: this.props.income,
      job: this.props.job,
      location: this.props.location,
      offspring: this.props.offspring,
      orientation: this.props.orientation,
      pets: this.props.pets,
      religion: this.props.religion,
      sex: this.props.sex,
      smokes: this.props.smokes,
      status: this.props.status,
      profile_image: this.props.profile_image,
    };
    console.log(profileRec);
    axios.post("/profile/new", profileRec).then((saveRec) => {
      console.log(saveRec);
    });
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Profile</h1>
        <form className="centerForm">
          <input
            name="firstName"
            onChange={this.handleChange}
            value={this.state.firstName}
          />
          <input
            name="lastName"
            onChange={this.handleChange}
            value={this.state.lastName}
          />
          <input
            name="phone"
            onChange={this.handleChange}
            value={this.state.phone}
          />
          <input
            name="location"
            onChange={this.handleChange}
            value={this.state.location}
          />
          <input
            name="age"
            onChange={this.handleChange}
            value={this.state.age}
          />
          <input
            name="gender"
            onChange={this.handleChange}
            value={this.state.gender}
          />
          <input
            name="orientation"
            onChange={this.handleChange}
            value={this.state.orientation}
          />
          <input
            name="ethnicity"
            onChange={this.handleChange}
            value={this.state.ethnicity}
          />
          <input
            name="height"
            onChange={this.handleChange}
            value={this.state.height}
          />
          <input
            name="offspring"
            onChange={this.handleChange}
            value={this.state.offspring}
          />
          <input
            name="wantOffspring"
            onChange={this.handleChange}
            value={this.state.wantOffspring}
          />
          <input
            name="havePets"
            onChange={this.handleChange}
            value={this.state.havePets}
          />
          <input
            name="wantPets"
            onChange={this.handleChange}
            value={this.state.wantPets}
          />
          <input
            name="education"
            onChange={this.handleChange}
            value={this.state.education}
          />
          <input
            name="job"
            onChange={this.handleChange}
            value={this.state.job}
          />
          <input
            name="religion"
            onChange={this.handleChange}
            value={this.state.religion}
          />
          <input
            name="diet"
            onChange={this.handleChange}
            value={this.state.diet}
          />
          <input
            name="drinks"
            onChange={this.handleChange}
            value={this.state.drinks}
          />
          <input
            name="drugs"
            onChange={this.handleChange}
            value={this.state.drugs}
          />
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
        >
          Save Profile
        </Button>
      </div>
    );
  }
}

export default ProfileDashboard;
