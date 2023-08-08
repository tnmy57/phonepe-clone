import React from "react";
import logo from "../../../assets/logo.svg";
import "./style.css";

const Nav = () => {
  return (
    <div className="navigation">
      <div className="navbar">
        <div className="img-div">
          <img src={logo} alt="logo" />
        </div>
        <div className="nav-component">
          <a href="">BUSINESS SOLUTIONS</a>
          <a href="">PRESS</a>
          <a href="">CAREERS</a>
          <a href="">ABOUT US</a>
          <a href="">BLOG</a>
          <a href="">CONTACT US</a>
          <a href="">TRUST & SAFETY</a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
