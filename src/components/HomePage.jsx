import React from "react";
import NavBar from "./NavBar";
import picture from "../assets/archPicture.png";
import "../styles/home.css";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <div className="container mt-2">
        <div className="img-container row align-items-center">
          {/*for txt*/}
          <div className="col-md-8">
            <h3>
              Hi, I'm Archana Ojha <br />
              <small>Web Developer</small>
              <br />
              <small className="text-body-secondary">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque,
                numquam placeat aliquam fuga impedit aut odio reprehenderit
                perferendis minima natus quidem voluptas ut voluptatem repellat
                nulla necessitatibus aspernatur, inventore eum.
              </small>
            </h3>
          </div>

          {/*for img*/}
          <div className="col-md-4 text-center">
            <img
              src={picture}
              alt="img"
              className="img-fluid rounded-circle"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;