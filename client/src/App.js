import Axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./Components/auth/Login.js";
import Register from "./Components/auth/Register.js";
import BottomNavigation from "./Components/BottomNavigation/BottomNavigation.js";
import Home from "./Components/Pages/Home.js";
import Profile from "./Components/Pages/Profile.js";
import UserContext from "./context/UserContext";

import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await Axios.post(
        "http://localhost:5000/users/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenRes.data) {
        const userRes = await Axios.get("http://localhost:5000/users/", {
          headers: { "x-auth-token": token },
        });
        setUserData({ token, user: userRes.data });
      }
    };

    checkLoggedIn();
  }, []);

  return (
    <>
      <BrowserRouter>
        {/* to give state to all of these components, can access userData and store current userData */}
        <UserContext.Provider value={{ userData, setUserData }}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
          </Switch>
          <BottomNavigation />
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}
