import React from "react";

class ProfileDashboard extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    phone: "",
    // email: "",
    age: "",
    gender: "",
    orientation: "",
    ethnicity: "",
    height: "",
    offspring: "",
    wantOffspring: "",
    havePets: "",
    wantPets: "",
    education: "",
    job: "",
    religion: "",
    diet: "",
    drinks: "",
    substances: "",
    interest: "",
  };
  componentDidMount = () => {
    console.log(this.props);
  };
  render() {
    return (
      <div>
        <h1>Profile</h1>
        <form>
          <input value={this.props.firstName} />
          <input value={this.props.lastName} />
          <input value={this.props.phone} />
          {/* <input value={this.props.email} /> */}
          <input value={this.props.age} />
          <input value={this.props.gender} />
          {/* select from  */}
          <input value={this.props.orientation} />
          <input value={this.props.ethnicity} />
          {/* select from  */}
          <input value={this.props.height} />
          <input value={this.props.offspring} />
          {/* do you have/do you want? select yes/no/undecided*/}
          <input value={this.props.wantOffspring} />
          <input value={this.props.havePets} />
          <input value={this.props.wantPets} />
          <input value={this.props.education} />
          <input value={this.props.job} />
          <input value={this.props.religion} />
          {/* select from  */}
          <input value={this.props.diet} />
          <input value={this.props.drinks} />
          <input value={this.props.substances} />
          {/* sliders: will include alcohol, weed, cigs, drugs*/}
          <input value={this.props.interest} />
          {/* select from  */}
        </form>
      </div>
    );
  }
}

export default ProfileDashboard;
