import React from "react";
import picture from "../assets/archPicture.png";
import "../styles/home.css";

const HomePage = () => {
  return (
    <div>
      <div className="container mt-3">
        <div className="row align-items-center">
          {/*text Section */}
          <div className="col-12 col-md-8 order-2 order-md-1">
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
            <button className="btn border hireBtn mt-3">Hire Me</button>
            <button className="btn border mx-4 cvBtn mt-3">CV</button>
          </div>

          {/*image Section */}
          <div className="col-12 col-md-4 text-center order-1 order-md-2 mb-3 mb-md-0">
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