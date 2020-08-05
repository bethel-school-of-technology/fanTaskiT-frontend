import React, { useState, useEffect } from 'react';
import { Link, BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import { render } from "@testing-library/react";
import Axios from "axios";

export default function Login() {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState(''); 

  
  const validateForm = () => {
    return email.length > 0 && password.length > 0;
  }

  const handleChange = (event) => {
    setEmail(event.target.value); 
  }

  const handleChangeP = (event) => {
    setPassword(event.target.value); 
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      email: email,
      password: password
    };

    Axios.post(`http://localhost:3001/users/login`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
        return <Redirect to = {{ pathname: `/task` }}/>;
      })
  }


      return (
        <div className="app-wrapper-login">
          <div className="Login"></div>
            <form onSubmit={handleSubmit}>
              <FormGroup controlId="email" name="email" bsSize="large">
                <ControlLabel>Email</ControlLabel>
                  <FormControl
                      autoFocus
                      type="email"
                      value={email}
                      onChange={handleChange}
                    />
                  </FormGroup>
              <FormGroup  controlId="password" name="password" bsSize="large">
                <ControlLabel>Password</ControlLabel>
                  <FormControl
                      type="password"
                      value={password}
                      onChange={handleChangeP}
                    />
                  </FormGroup>
                  <Button className="btn-login" block bsSize="large" type="submit">
                    Login
                  </Button>


                  <div className="login-welcome">
                    Welcome<span className="accent-text">Back.</span>
                    </div>
              </form>
            </div>
      )   
  }

