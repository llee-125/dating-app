import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
import Axios from "axios";
import ErrorNotice from "../../../src/ErrorHandling/ErrorNotice";
import Login from "../../../src/Components/auth/Login";

export default function Register() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();
  const [error, setError] = useState();

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();

    try {
      const newUser = { email, password, passwordCheck };
      await Axios.post("/users/register", newUser);
      const loginRes = await Axios.post("/users/login", {
        email,
        password,
      });
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      localStorage.setItem("auth-token", loginRes.data.token);
      history.push("/profile");
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  };

  return (
    <div className="page">
      <div id="image">
        <img
          className="Mumble"
          src={require("../BottomNavigation/mumble-logo.png")}
        />
      </div>
      <h1>Mumble</h1>

      <h4>Sign up to Mumble now!</h4>
      {error && (
        <ErrorNotice message={error} clearError={() => setError(undefined)} />
      )}

      <form className="form" onSubmit={submit}>
        <label htmlFor="register-email">Email: </label>
        <input
          id="register-email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="register-password">Password: </label>
        <input
          id="register-password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Verify Password"
          onChange={(e) => setPasswordCheck(e.target.value)}
        />

        <input type="submit" value="Register" />
      </form>
      <div className="Login">
        <Link to="/Login">LOG IN!</Link>
      </div>
    </div>
  );
}
