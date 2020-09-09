import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../Components/Layout/Header";
import Home from "../Components/Pages/Home.js";
import Login from "../Components/auth/Login.js";
import Register from "../Components/auth/Register.js";
import UserContext from "../context/UserContext";

import "../style.css";

export default function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  return (
    <>
      <BrowserRouter>
        {/* to give state to all of these components, can access userData and store current userData */}
        <UserContext.Provider value={{ userData, setUserData }}>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </Switch>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}
