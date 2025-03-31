import React from "react";
import picture from "../assets/archPicture.png";
import "../styles/project.css"

const Projects = () => {
  return (
    <div className="container">
      <h1 className="text-center">My Projects</h1>
      <div className="d-flex justify-content-center flex-wrap gap-3">
        <div className="card">
          <img src={picture} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">project 1</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet elit.um ipsa minus doloribus unde nulla fuga fugit, odio iusto maxime?
            </p>
            <a href="#" className="btn btn-primary">
              visit website
            </a>
          </div>
        </div>
        <div className="card">
          <img src={picture} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">project 2</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet elit.um ipsa minus doloribus unde nulla fuga fugit, odio iusto maxime?
            </p>
            <a href="#" className="btn btn-primary">
              visit website
            </a>
          </div>
        </div>
        <div className="card">
          <img src={picture} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">project 3</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet elit.um ipsa minus doloribus unde nulla fuga fugit, odio iusto maxime?
            </p>
            <a href="#" className="btn btn-primary">
              visit website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;