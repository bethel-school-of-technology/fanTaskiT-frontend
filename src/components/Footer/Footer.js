import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
    render() {
        return <div className="main-footer">
                   <div className="container">
                       <nav className="footer-nav">
    <div className="date-container">
      <p className="date">
        &copy;{new Date().getFullYear()} fanTask-iT
      </p>
    </div>
  </nav>
  <nav className="footer-nav">
    <ul>
      <li>
        <a href="https://twitter.com/ThefanTaskiTApp" className="social-link">
          <img src="images/twitter.svg" />
          Twitter
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/fanTaskiT.73744" className="social-link">
          <img src="images/facebook.svg" />
          Facebook
        </a>
      </li>
    </ul>
  </nav>
 
</div>
 
  

                </div>
            

    }
}

export default Footer;