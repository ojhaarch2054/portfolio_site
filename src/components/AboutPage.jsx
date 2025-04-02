import React from "react";
import picture from "../assets/archPicture.png";
import "bootstrap-icons/font/bootstrap-icons.css";

const AboutPage = () => {
  const youtubeClick = () => {
    window.open("https://www.youtube.com/@ItsmeArchana-8");
  };
  const tiktokClick = () => {
    window.open("https://www.tiktok.com/@arch_ana123?lang=en");
  };
  const instaClick = () => {
    window.open("https://www.instagram.com/ojhaarchana30/");
  };
  return (
    <div>
      <div className="container mt-2">
        <div className="row align-items-center">
          {/*img Section */}
          <div className="col-12 col-md-4 text-center order-1 mb-3 mb-md-0">
            <img src={picture} alt="img" className="img-fluid rounded-circle" />
          </div>
          {/*txt Section */}
          <div className="col-12 col-md-8 order-2">
            <h4>
              <small>
                Hello! I'm Archana. I am a young and motivated programmer
                and web developer. I am studying for a Bachelor’s degree in
                Information Technology at Oulu University of Applied
                Sciences (OAMK). I have a strong interest in web application
                development and experience working with JavaScript, Python,
                TypeScript, React, Node.js, SQL, and PostgreSQL. I enjoy
                creating full-stack applications as part of my studies and
                personal projects. I am always learning and improving my skills
                to build better websites and applications.
              </small>
              <br />
              <br />
              <small>
                free to connect with me if you'd like to collaborate or chat
                about tech!
              </small>
            </h4>
            <div className="d-flex gap-3 mt-3">
              <button className="btn border" onClick={instaClick}>
                <i className="bi bi-instagram"></i>
              </button>
              <button className="btn border" onClick={tiktokClick}>
                <i className="bi bi-tiktok"></i>
              </button>
              <button className="btn border" onClick={youtubeClick}>
                <i className="bi bi-youtube"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
