import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles/project.css";
//import picture from "../assets/archPicture.png";
import budget from "../assets/budgetapp.webp";
import movie from "../assets/movies.webp";
import quiz from "../assets/quiz.png";
import feedback from "../assets/feedback.png";
import quote from "../assets/quote.jpg";
import weather from "../assets/weather.png";

const projects = [
  {
    id: 1,
    title: "Budget Tracker",
    image: budget,
    description:
      "It is a web application which allows user to manage their daily finances. It is made using React, Bootstrap, Nodejs, express and PostgreSQL.This have has authentication and authorizattion feature. I have used JWT for authentication.",
    link: "https://github.com/ojhaarch2054/Budget_tracker",
    githubLink: "https://ojhaarch2054/Budget_tracker",
  },
  {
    id: 2,
    title: "Movie App",
    image: movie,
    description:
      "This is a complete movie application made using React, Node.js, Express and PostgreSQL and was made in a group as a part of the coursework. The movie app enables users to explore movies, view showtimes, create groups and engage with other users.",
    link: "https://github.com/Movie-App-Project-OAMK-G15/movie_app",
    githubLink: " https://github.com/Movie-App-Project-OAMK-G15/movie_app",
  },
  {
    id: 3,
    title: "Quizzify",
    image: quiz,
    description:
      "This app was developed in a group for our coursework. It is a quiz app in which user can take quizzes on various topics. The results from the quizzes are stored and the user can find insights on their performance on the quizzes. I worked in the UI design for this project using Bootstrap, HTML and CSS.",
    link: "https://github.com/Gloryozo/Quizzify",
    githubLink: "https://github.com/Gloryozo/Quizzify",
  },
  {
    id: 4,
    title: "Feedback Page",
    image: feedback,
    description:
      "Created a feedback page using Bootstrap, Node.js, Javascript, Express, and PostgreSQL. The page stores customer details and feedback in a database. Also, the page user can give feedback by text and rating stars.",
    link: "https://github.com/ojhaarch2054/Feedback_page",
    githubLink: "https://github.com/ojhaarch2054/Feedback_page",
  },
  {
    id: 5,
    title: "Quote_App",
    image: quote,
    description:
      "I made this website using HTML, CSS, JS, and API. You can share quotes on Twitter or Facebook by clicking the icons, or simply copy the quotes. Click the New Quote button to get a new quote whenever you want.",
    link: "https://daily-quote-generater.onrender.com/",
    githubLink: "https://github.com/ojhaarch2054/Daily-Quote-generater",
  },
  {
    id: 6,
    title: "Weather_App",
    image: weather,
    description:
      "This is a simple website where you can check the current weather for different places. The website fetches weather data from the OpenWeatherMap API and displays it in a user-friendly format. I built it using React and OpenWeatherMap API to get the weather information online.",
    link: "https://github.com/ojhaarch2054/Weather-info",
    githubLink: "https://github.com/ojhaarch2054/Weather-info",
  },
];

const webClick = () => {
  window.open(projects.link);
};

const githubClick = () => {
  window.open(projects.githubLink);
};

const Projects = () => {
  return (
    <div className="container mt-5 mx-3">
      <h1 className="text-center mb-5 titleSize text-decoration-underline">
        My Projects
      </h1>

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

        <div id="projectsCarousel" className="carousel slide w-100 ">
          <div className="carousel-inner">
            {/*for 1st 3 slide*/}
            <div className="carousel-item active ">
              <div className="row justify-content-center ">
                {/*it will map over the first 3 projects start from 0 index resulting in 3 item*/}
                {projects.slice(0, 3).map((project) => (
                  <div
                    className="col-md-4 d-flex align-items-stretch mt-4 shadow "
                    key={project.id}
                  >
                    <div className="card projectCard cardPart h-100  d-flex flex-column card shadow p-1">
                      <img
                        src={project.image}
                        className="card-img-top cardImg equalImg"
                        alt={project.title}
                      />
                      <div className="card-body infoPart flex-column text-center">
                        <h5 className="card-title">{project.title}</h5>
                        <p className="card-text">{project.description}</p>
                        <a
                          href={project.link}
                          className="btn webBtn projectBtn"
                          title="Haven't deployed yet"
                        >
                          Visit Website
                        </a>
                        <a
                          onClick={githubClick}
                          className="btn webBtn mx-2 projectBtn"
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
                  <div
                    className="col-md-4 d-flex align-items-stretch shadow"
                    key={project.id}
                  >
                    <div className="card cardPart d-flex flex-column card shadow p-1">
                      <img
                        src={project.image}
                        className="card-img-top cardImg equalImg"
                        alt={project.title}
                      />
                      <div className="card-body infoPart flex-column  text-center ">
                        <h5 className="card-title">{project.title}</h5>
                        <p className="card-text">{project.description}</p>
                        <a
                          href={project.link}
                          className="btn webBtn projectBtn"
                        >
                          Visit Website
                        </a>
                        <a
                          onClick={webClick}
                          className="btn webBtn mx-2 projectBtn"
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
