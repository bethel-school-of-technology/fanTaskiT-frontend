import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Task from "./components/Task/TaskApp";
import Login from "./components/LoginForm/Login"
import Join from "./components/RegistrationForm/Form";
import Discover from "./components/Discover/Discover";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/task">
        <Task />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/join">
        <Join />
      </Route>
      <Route exact path="/discover">
        <Discover />
      </Route>

      
    </Switch>

  );
}