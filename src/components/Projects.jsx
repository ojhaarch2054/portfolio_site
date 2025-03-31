import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles/project.css";
import picture from "../assets/archPicture.png";

const projects = [
  {
    id: 1,
    title: "Project 1",
    image: picture,
    description: "Description of Project 1",
    link: "#",
    githubLink: "https://github.com/ojhaarch2054/portfolio_site",
  },
  {
    id: 2,
    title: "Project 2",
    image: picture,
    description: "Description of Project 2",
    link: "#",
    githubLink: "https://github.com/ojhaarch2054/portfolio_site",
  },
  {
    id: 3,
    title: "Project 3",
    image: picture,
    description: "Description of Project 3",
    link: "#",
    githubLink: "https://github.com/ojhaarch2054/portfolio_site",
  },
  {
    id: 4,
    title: "Project 4",
    image: picture,
    description: "Description of Project 4",
    link: "#",
    githubLink: "https://github.com/ojhaarch2054/portfolio_site",
  },
  {
    id: 5,
    title: "Project 5",
    image: picture,
    description: "Description of Project 5",
    link: "#",
    githubLink: "https://github.com/ojhaarch2054/portfolio_site",
  },
  {
    id: 6,
    title: "Project 6",
    image: picture,
    description: "Description of Project 6",
    link: "#",
    githubLink: "https://github.com/ojhaarch2054/portfolio_site",
  },
];

const Projects = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">My Projects</h1>

      <div className="d-flex align-items-center justify-content-center position-relative">
        {/*left btn to show previous project*/}
        <button
          className="custom-carousel-btn prev-btn"
          type="button"
          data-bs-target="#projectsCarousel"
          data-bs-slide="prev"
        >
          ❮
        </button>

        <div id="projectsCarousel" className="carousel slide w-75">
          <div className="carousel-inner">
            {/*for 1st 3 slide*/}
            <div className="carousel-item active">
              <div className="row justify-content-center">
                {/*it will map over the first 3 projects start from 0 index resulting in 3 item*/}
                {projects.slice(0, 3).map((project) => (
                  <div className="col-md-4" key={project.id}>
                    <div className="card">
                      <img
                        src={project.image}
                        className="card-img-top"
                        alt={project.title}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{project.title}</h5>
                        <p className="card-text">{project.description}</p>
                        <a href={project.link} className="btn webBtn">
                          Visit Website
                        </a>
                        <a
                          onClick={() =>
                            window.open(
                              project.githubLink,
                              "_blank",
                              "noopener,noreferrer"
                            )
                          }
                          className="btn webBtn mx-2"
                        >
                          <i className="bi bi-github"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/*for second 3 slide*/}
            <div className="carousel-item">
              <div className="row justify-content-center">
                {/*it will map over the projects from index 3 to 5 */}
                {projects.slice(3, 6).map((project) => (
                  <div className="col-md-4" key={project.id}>
                    <div className="card">
                      <img
                        src={project.image}
                        className="card-img-top"
                        alt={project.title}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{project.title}</h5>
                        <p className="card-text">{project.description}</p>
                        <a href={project.link} className="btn webBtn">
                          Visit Website
                        </a>
                        <a
                          onClick={() =>
                            window.open(
                              project.githubLink,
                              "_blank",
                              "noopener,noreferrer"
                            )
                          }
                          className="btn webBtn mx-2"
                        >
                          <i className="bi bi-github"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/*right btn for next slide*/}
        <button
          className="custom-carousel-btn next-btn"
          type="button"
          data-bs-target="#projectsCarousel"
          data-bs-slide="next"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default Projects;
