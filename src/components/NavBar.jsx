import React from "react";
import { Link } from "react-router-dom";
import "../styles/nav.css"

const NavBar = () => {
  return (
    <div className="nav-container">
      <div className="nav-content">
        <h1 className="logo">Arch...</h1>
        <ul className="nav-links">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/projects">
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/skills">
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contacts">
              Contacts
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;