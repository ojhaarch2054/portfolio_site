import React, { useState } from "react";
import picture from "../assets/archPicture.png";
import "../styles/home.css";
import mycv from "../assets/Archana_ojha_cv.pdf";
import "bootstrap-icons/font/bootstrap-icons.css";

const HomePage = () => {
  //for dialog box
  const [dialogBoxOpen, setDialogBoxOpen] = useState(false);

  const handleHireMeClick = () => {
    setDialogBoxOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogBoxOpen(false);
  };

  const cvClick = () => {
    window.open(mycv)
  }

  const linkdinClick = () => {
    window.open("https://www.linkedin.com/in/archana-ojha-094b8818a/")
  }

  const githubClick = () => {
    window.open("https://github.com/ojhaarch2054")

  }
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
            <button
              className="btn border hireBtn mt-3"
              onClick={handleHireMeClick}
            >
              Hire Me
            </button>

            <button
              className="btn border mx-4 cvBtn mt-3 "
              onClick={cvClick}
            >
              CV
            </button>
            <div className="d-flex gap-3 mt-3">
              <button className="btn border" onClick={linkdinClick}>
              <i class="bi bi-linkedin"></i>
              </button>
              <button className="btn border" onClick={githubClick}>
              <i class="bi bi-github"></i>
              </button>
            </div>
          </div>
          {/*dialog box */}
          {dialogBoxOpen && (
            <div
              className="modal show d-block"
              tabIndex="-1"
              role="dialog"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Contact Me</h5>
                    <button
                      type="button"
                      className="btn-close"
                      aria-label="Close"
                      onClick={handleCloseDialog}
                    ></button>
                  </div>
                  <div className="modal-body">
                    <p>Please fill out the form to get in touch!</p>
                    <div className="mb-4">
                      <label className="form-label">Email address:</label>
                      <input
                        type="email"
                        className="form-control"
                        id="input1"
                        placeholder="Enter your amail address"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="form-label">Message:</label>
                      <textarea
                        className="form-control"
                        id="input2"
                        rows="5"
                      ></textarea>
                    </div>

                    <button className="btn sendBtn">Send</button>
                  </div>

                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn closeBtn"
                      onClick={handleCloseDialog}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/*image Section */}
          <div className="col-12 col-md-4 text-center order-1 order-md-2 mb-3 mb-md-0">
            <img src={picture} alt="img" className="img-fluid rounded-circle" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
