import React, { useState, Component } from "react";
import { Link, BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";

import "./App.css";
import Routes from "./Routes";
import { LinkContainer } from "react-router-bootstrap";
import axios from 'axios'

//Pages
import Join from "./components/RegistrationForm/Form";
import Login from "./components/LoginForm/Login";
import Discover from "./components/Discover/Discover";
import Footer from "./components/Footer/Footer";



//import { Join, Discover, Login } from "./containers";
//import Header from "./containers/Header/Header";
//import LoginForm from "./containers/LoginForm/LoginForm";
//import RegistrationForm from "./containers/RegistrationForm/RegistrationForm";
//import Home from './components/Home/Home';
//import AlertComponent from "./containers/AlertComponent/AlertComponent"; 
//import Form from "./containers/RegistrationForm/Form";


class App extends Component {
  render() {
    return (
    <div>
    <div className="page-container">
      <div className="content-wrap">
      
    <div className="App container">
      <Navbar fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/" className="title"><img className="logo" src="/images/logo3.png" alt="logo"/>fanTask-iT</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <LinkContainer to="/discover">
              <NavItem>Discover</NavItem>
            </LinkContainer>
            <LinkContainer to="/join">
              <NavItem>Join</NavItem>
            </LinkContainer>
            <LinkContainer to="/login">
              <NavItem>Login</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/*<Switch>
        <Route exact path="/login/" component={Login} />
        <Route exact path="/discover/" component={Discover} />
        <Route exact path="/join/" component={Join} />   
      </Switch>*/}
      <Routes/>
      </div>
      </div>

      <div className="home-page-circle-1"></div>
      <div className="home-page-circle-2"></div>
      <div className="home-page-circle-3"></div>  

    </div>
    <Footer/>
    </div>
    )};
};


export default App;