import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/NavBar.css"
// import logo from "../assets/images/logo.jpg"

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Logo />
          {/* <img src={logo} alt="" /> */}
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/livingroom">LivingRoom</NavLink>
            </li>
            <li>
              <NavLink to="/bedroom">BedRoom</NavLink>
            </li>
            <li>
              <NavLink to="/kitchen">Kitchen</NavLink>
            </li>
            <li>
              <NavLink to="/outdoor">OutDoor</NavLink>
            </li>
            <li>
              <NavLink to="/gallery">Gallery</NavLink>
            </li>
            <li>
              <NavLink to="/about"> About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const Hamburger = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="52"
    height="24"
    viewBox="0 0 52 24"
  >
    <g transform="translate(-294 -47)">
      <rect
        width="42"
        height="4"
        rx="2"
        transform="translate(304 47)"
        fill="#574c4c"
      />
      <rect
        width="42"
        height="4"
        rx="2"
        transform="translate(304 67)"
        fill="#574c4c"
      />
      <rect
        width="52"
        height="4"
        rx="2"
        transform="translate(294 57)"
        fill="#574c4c"
      />
    </g>
  </svg>
);

const Logo = () => (
  <svg
    id="logo-52"
    width="170"
    height="41"
    viewBox="0 0 170 41"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M51.2775 29.3232H63.2295V25.7232H55.5255V12.1632H51.2775V29.3232Z"
      fill="#2F234F"
    ></path>
  </svg>
);

export default Navbar;
