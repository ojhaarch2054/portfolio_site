import React from "react";
//import { Link } from "react-router-dom";
import "../styles/nav.css";
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg nav-container">
      <div className="container-fluid">
        <h1 className="navbar-brand logo text-white">Arch...</h1>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav ms-auto nav-links">
            <li className="nav-item">
              <a className="nav-link text-white" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#contacts">
                Contacts
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
