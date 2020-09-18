import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
import Axios from "axios";
import ErrorNotice from "../../../src/ErrorHandling/ErrorNotice";
// import Register from "../../../src/Components/auth/Register";

export default function Login(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const { userData, setUserData } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    console.log(userData);
    if (userData.user.email) {
      history.push("/profile/discover");
    }
  }, [userData, history]);

  const submit = async (e) => {
    e.preventDefault();

    try {
      const loginUser = { email, password };
      const loginRes = await Axios.post("/users/login", loginUser);
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      localStorage.setItem("auth-token", loginRes.data.token);
      history.push("/");
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  };

  return (
    <div className="page">
      <div id="image">
        <img
          alt="mumblelogo"
          className="Mumble"
          src={require("../BottomNavigation/mumble-logo.png")}
        />
      </div>
      <h1>Mumble</h1>
      <h4>A Dating App for Introverts.</h4>
      {error && (
        <ErrorNotice message={error} clearError={() => setError(undefined)} />
      )}

      <form className="form" onSubmit={submit}>
        <label htmlFor="login-email">Email: </label>
        <input
          id="login-email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="login-password">Password: </label>
        <input
          id="login-password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="Login" />
      </form>
      {/* link to page */}
      <div className="Register">
        <Link to="/Register">SIGN UP!</Link>
      </div>
    </div>
  );
}
