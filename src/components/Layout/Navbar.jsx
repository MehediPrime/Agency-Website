import React from "react";
import "../../css/navbar.scss";

const Navbar = () => {
  return (
    <nav className="container">
      <div className="logo">
        <a href="#home">AGENCY</a>
      </div>
      <div className="menuButton">
        <input type="checkbox" id="menu" />
        <label htmlFor="menu">🟰</label>
      </div>
      <div className="navLinks">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#team">Team</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
