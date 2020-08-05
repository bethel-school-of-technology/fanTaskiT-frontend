import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";



export default function Home() {
  return (
    <div className="home-main-section">
  <div className="img-wrapper">
    <div className="lady-image" />
    <img src="/images/landing-page-girl.png" alt="Landing Lady"/>
  </div>
  <div className="call-to-action">
    <h1 className="title">Get More <span className="accent-done">Done</span></h1>
    <span className="subtitle">Create, Build, and Save lists with just one click</span>
    <Link to="/join" className="btn">Join Now</Link>
  </div>
</div>

    ); 
  }
  