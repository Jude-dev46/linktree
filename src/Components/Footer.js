import React from "react";

import "./Footer.css";
import zuriLogo from "../img/Zuri.Internship_Logo.png";
import ingressLogo from "../img/I4G.png";

const Footer = (props) => {
  return (
    <div className="footer-items">
      <div className="item">
        <img src={zuriLogo} alt="zuri-logo" />
        <div className="footer-text">
          <p>HNG Internship 9 Frontend Task</p>
        </div>
        <img src={ingressLogo} alt="ingress" className="ingress" />
      </div>
    </div>
  );
};

export default Footer;
