import React from "react";

class ProfileDashboard extends React.Component {
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
  };
  componentDidMount = () => {
    console.log(this.props);
  };
  render() {
    return (
      <form>
        <input value={this.props.firstName} />
        <input value={this.props.lastName} />
        <input value={this.props.phone} />
        <input value={this.props.email} />
        <input value={this.props.birthday} />
        <input value={this.props.gender} />
        <input value={this.props.ethnicity} />
        <input value={this.props.body} />
        <input value={this.props.education} />
        <input value={this.props.religion} />
        <input value={this.props.politics} />
        <input value={this.props.children} />
        <input value={this.props.substances} />
        <input value={this.props.interest} />
      </form>
    );
  }
}

export default ProfileDashboard;
