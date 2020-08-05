import React, { Component } from "react";
import "./Discover.css";

class Discover extends Component {
    render() {
        return <div className="full-height-grow">
  <div className="container full-height-grow">
    
      
      
        </div>
       
    
    <section className="discover-main-section">
      <div className="call-to-action">
        <h1 className="title">Discover
          <span className="accent-text1">.</span>
          <span className="accent-text2">.</span>
          <span className="accent-text3">.</span>
          <br/>
          Organization</h1>
        <div className="icon-section">
          <div className="icon">
            <img className="icon1" src="images/Task.svg" />
            Todo
          </div>
          <div className="icon">
            <img className="icon2" src="images/shop1.svg" />
            Groceries
          </div>
          <div className="icon">
            
              <img className="icon3" src="images/more2.svg" />
            
            More
          </div>
        </div>
        <h3 className="discover-text">
         Your to-do list
          <span className="accent-text">Done.</span>
        </h3>
      </div>
      <div className="image-container">
        
      <img className="discover-image" src="/images/Group 3.svg" alt=""/>
      </div>
    </section>
  </div>

    }
  }

export default Discover;