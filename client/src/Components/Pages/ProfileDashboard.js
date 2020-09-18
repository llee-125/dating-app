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
      <div className="proDashMargin">
        <h1>Profile</h1>
        <form className="centerForm">
          <img
            onChange={this.handleChange}
            src={this.state.profile_image}
            alt=""
          />
          <span>Hi, I'm &nbsp;</span>
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

          {/* Age, Orientation, Gender */}
          <br />
          <span style={{ marginRight: "-5px" }}>I am a &nbsp;</span>
          <input
            name="age"
            onChange={this.handleChange}
            value={this.state.age}
            size="2"
            maxlength="2"
            style={{ marginRight: "2px" }}
          />
          <span> year young &nbsp; </span>
          <input
            name="orientation"
            onChange={this.handleChange}
            value={this.state.orientation}
            size="8"
          />
          <input
            name="gender"
            onChange={this.handleChange}
            value={this.state.gender}
            size="8"
          />
          <br />
          <p>Height</p>
          <input
            name="height"
            onChange={this.handleChange}
            value={this.state.height}
            size="2"
          />
          <p>Number </p>
          <input
            name="phone"
            onChange={this.handleChange}
            value={this.state.phone}
            style={{ width: "auto" }}
          />
          <p>Location </p>
          <input
            name="location"
            onChange={this.handleChange}
            value={this.state.location}
          />
          <p>Ethnicity </p>
          <input
            name="ethnicity"
            onChange={this.handleChange}
            value={this.state.ethnicity}
          />
          <p>Current Offspring </p>
          <input
            name="offspring"
            onChange={this.handleChange}
            value={this.state.offspring}
          />
          <p>Want Offspring </p>
          <input
            name="wantOffspring"
            onChange={this.handleChange}
            value={this.state.wantOffspring}
          />
          <p>Have Pets </p>
          <input
            name="havePets"
            onChange={this.handleChange}
            value={this.state.havePets}
          />
          <p>Want Pets </p>
          <input
            name="wantPets"
            onChange={this.handleChange}
            value={this.state.wantPets}
          />
          <p>Education </p>
          <input
            name="education"
            onChange={this.handleChange}
            value={this.state.education}
          />
          <p>Job</p>
          <input
            name="job"
            onChange={this.handleChange}
            value={this.state.job}
          />
          <p>Religion</p>
          <input
            name="religion"
            onChange={this.handleChange}
            value={this.state.religion}
          />
          <p>Diet</p>
          <input
            name="diet"
            onChange={this.handleChange}
            value={this.state.diet}
          />
          <p>Drinks</p>
          <input
            name="drinks"
            onChange={this.handleChange}
            value={this.state.drinks}
          />
          <p>Drugs</p>
          <input
            name="drugs"
            onChange={this.handleChange}
            value={this.state.drugs}
          />
          <p>Smokes</p>
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
