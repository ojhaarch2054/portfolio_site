import React from "react";
import picture from "../assets/archPicture.png";
import "bootstrap-icons/font/bootstrap-icons.css";

const AboutPage = () => {
  const youtubeClick = () => {
    window.open("https://www.youtube.com/@ItsmeArchana-8")
  }
  const tiktokClick = () => {
    window.open("https://www.tiktok.com/@arch_ana123?lang=en")

  }
  const instaClick = () => {
    window.open("https://www.instagram.com/ojhaarchana30/")

  }
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
            <h3>
              <small className="text-body-secondary">
                Hi, I'm Archana Ojha, a student pursuing a Bachelor's degree in
                Information Technology at OAMK. I’m passionate about technology,
                with a focus on software development and problem-solving. I
                enjoy learning new skills and applying them to real-world
                challenges. I’m particularly interested in web development Feel
              </small>
              <br />
              <small>
                free to connect with me if you'd like to collaborate or chat
                about tech!
              </small>
            </h3>
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
