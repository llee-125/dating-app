import React from "react";
import Button from "@material-ui/core/Button";

class ProfileDashboard extends React.Component {
  state = {
    firstName: this.props.firstName,
    lastName: this.props.lastName,
    phone: this.props.phone,
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
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <h1>Profile</h1>
        <form>
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

        <Button onClick={this.saveProfile}>Submit</Button>
      </div>
    );
  }
}

export default ProfileDashboard;
