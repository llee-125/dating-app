import Axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./Components/auth/Login.js";
import Register from "./Components/auth/Register.js";
import BottomNavigation from "./Components/BottomNavigation/BottomNavigation.js";
import Home from "./Components/Pages/Home.js";
import Profile from "./Components/Pages/Profile.js";
import UserContext from "./context/UserContext";
import Discover from "./Components/Pages/Discover";
import Likes from "./Components/Pages/Likes";
import Search from "./Components/Pages/Search";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });
  let profileSet = [];
  let likesSet = [];
  // useEffect(()=>{
  //    retrieveAllPersons();
  //    retrieveAllLikes();
  // },[])

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
    retrieveAllPersons();
    retrieveAllLikes();
  }, []);


  const retrieveAllPersons = () => {
    Axios.get("/profile/discover")
      .then((response) => {
        profileSet = [];
        profileSet = response.data;
        setProfileArray([...profileSet]);
      })
      .catch((err) => console.log(err));
  };

  const retrieveAllLikes = () => {
    Axios.get("/profile/likes")
      .then((response) => {
        likesSet = [];
        likesSet = response.data;
        console.log("response data"+response);
        setLikesArray([...likesSet]);
      })
      .catch((err) => console.log(err));
  };

  const updateLikesSet = (id) => {
    let newLikes = [];
    Axios.get("/profile/find/" + id)
      .then((response) => {
        newLikes = response.data;
        if (!likesSet.includes(newLikes)) {
          Axios.post("/profile/newlikes", newLikes).then(() => {
            retrieveAllLikes();
          }).catch((err) => console.log(err));
        }
      })
      .catch((err) => console.log(err));
  };

  const personSearch = (e) => {
    setSearch({ ...search, name: e.target.value });
  };

  const [search, setSearch] = useState({
    name: "",
  });

  const [profileArray, setProfileArray] = useState(profileSet);
  const [likesArray, setLikesArray] = useState(likesSet);

  const personList = profileArray.filter(function (profile) {
    if (search.name.length < 0) {
      return profile;
    } else if (profile.first_name.includes(search.name)) {
      return profile;
    }
  });

  
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
            <Route exact path="/profile/discover">
              <Search personSearch={personSearch} />
              {personList.map((profile, id) => (
                <Discover key={id} updateLikes={updateLikesSet}>
                  {profile}
                </Discover>
              ))}
            </Route>
            <Route exact path="/profile/likes">
              {likesArray.map((likes, id) => (
                <Likes key={id}>{likes}</Likes>
              ))}
            </Route>
          </Switch>
          <BottomNavigation />
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}
