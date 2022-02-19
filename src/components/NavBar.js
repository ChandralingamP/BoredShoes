import React from "react";
import logo from "../images/logo.png";
import "./hero.css";
const NavBar = () => {
  return (
    <div className="nav-bar">
      <img src={logo} alt="" />
      <ul className="nav-bar-items">
        <li>
          <a href="#hero">HOME</a>
        </li>
        <li>
          <a href="#gallery">GALLERY</a>
        </li>
        <li>
          <a href="">UPDATES</a>
        </li>
        <li>
          <a href="">ROADMAP</a>
        </li>
        <li>
          <a href="">ABOUT</a>
        </li>
      </ul>
      <button className="contact-btn">CONTACT US</button>
    </div>
  );
};

export default NavBar;
 