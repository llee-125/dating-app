import { AppBar } from "@material-ui/core";
// import { BottomNavigation } from "@material-ui/core";
import axios from "axios";
import React, { useState } from "react";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";

import BottomNav from "./Components/BottomNavigation/BottomNavigation";
import SvgMumble from "./Components/MumbleIcon/Mumble";
import Nav from "./Components/Nav/Nav";
import About from "./Components/Pages/About";
import Delete from "./Components/Pages/Delete";
import Edit from "./Components/Pages/Edit";
import Home from "./Components/Pages/Home";

import "./App.css";

function App() {
  const [tasks, setTasks] = useState();
  const [newText, updateNewText] = useState();
  const [activeTask, updateActiveTask] = useState();

  const retrieveTasks = () => {
    axios
      .get("/all")
      .then((response) => setTasks(() => response.data))
      .catch((err) => console.log(err));
  };

  const newTextChange = (e) => {
    updateNewText({ ...newText, [e.target.name]: e.target.value });
  };

  const newTextSubmit = (e) => {
    e.preventDefault();
    axios.post("/new", { text: newText.todoText }).then(() => retrieveTasks());
  };

  const editTextChange = (e) => {
    updateActiveTask({ ...activeTask, [e.target.name]: e.target.value });
  };

  const editTextSubmit = (e) => {
    e.preventDefault();
    axios
      .patch("/edit", { id: activeTask._id, text: activeTask.text })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Router>
      <AppBar />
      {/* <SvgMumble /> */}
      <BottomNav />
      {/* <BottomNavigation /> */}
      <Nav links={[<Link to="/">Home</Link>, <Link to="/about">About</Link>]} />
      <Switch>
        <Route exact path="/edit">
          <Edit
            updateEditText={updateActiveTask}
            editTextChange={editTextChange}
            editTextSubmit={editTextSubmit}
            editedText={activeTask}
          />
        </Route>
        <Route exact path="/delete">
          <Delete deleteText={activeTask} />
        </Route>
        <Route exact path="/">
          <Home
            retrieveTasks={retrieveTasks}
            tasks={tasks}
            newTextChange={newTextChange}
            newTextSubmit={newTextSubmit}
            updateActiveTask={updateActiveTask}
          />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
