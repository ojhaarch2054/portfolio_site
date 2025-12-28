import React, { useState, useContext } from "react";
import picture from "../assets/profile.png";
import "../styles/home.css";
import mycv from "../assets/Archana_ojha_cv.pdf";
import "bootstrap-icons/font/bootstrap-icons.css";
import { MessageContext } from "../context/MessageContext";

const HomePage = () => {
  //for dialog box
  const [dialogBoxOpen, setDialogBoxOpen] = useState(false);
  //for msg send
  const { email, setEmail, message, setMessage, status, sendBtn } =
    useContext(MessageContext);

  const handleHireMeClick = () => {
    setDialogBoxOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogBoxOpen(false);
  };

  const cvClick = () => {
    window.open(mycv);
  };

  const linkdinClick = () => {
    window.open("https://www.linkedin.com/in/archana-ojha-094b8818a/");
  };

  const githubClick = () => {
    window.open("https://github.com/ojhaarch2054");
  };
  return (
    <div>
      <div className="container ">
        <div className="row align-items-center">
          {/*image Section */}
          <div className="col-12 col-md-5 col-lg-5 text-center mb-3 mb-md-0">
            <img src={picture} alt="img" className="img-fluid imgSize" />
          </div>

          {/*text Section */}
          <div className="col-12 col-md-7  textSection text-wrap">
            <h3>
              Hi, I'm Archana Ojha <br />
              <small className=" fs-5">Software Developer Intern at Nome OY</small>
              <br />
              <br />
              <small className="txt d-block">
                I’m still studying — but I’ve already started creating.
                <br />
                Bringing ideas to life on the web with code, design, and
                curiosity.
              </small>
            </h3>
            <button
              className="btn border hireBtn mt-3 shadow"
              onClick={handleHireMeClick}
            >
              Hire Me
            </button>

            <button
              className="btn border mx-4 cvBtn mt-3 shadow"
              onClick={cvClick}
            >
              CV
            </button>
            <div className="d-flex gap-3 mt-3 ">
              <button className="btn border shadow text-white iconBtn" onClick={linkdinClick}>
                <i className="bi bi-linkedin shadow"></i>
              </button>
              <button className="btn border shadow text-white iconBtn" onClick={githubClick}>
                <i className="bi bi-github shadow"></i>
              </button>
            </div>
          </div>
          {/*dialog box */}
          {dialogBoxOpen && (
            <div
              className="modal show d-block dialogBox"
              tabIndex="-1"
              role="dialog"
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
                  <div className="modal-body text-black">
                    <p>Please fill out the form to get in touch!</p>
                    <div className="mb-4">
                      <label className="form-label">Email address:</label>
                      <input
                        type="email"
                        className="form-control"
                        id="input1"
                        placeholder="Enter your amail address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="mb-4">
                      <label className="form-label">Message:</label>
                      <textarea
                        className="form-control"
                        id="input2"
                        rows="5"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      ></textarea>
                    </div>

                    <button className="btn sendBtn" onClick={sendBtn}>
                      Send
                    </button>
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
        </div>
      </div>
    </div>
  );
};

export default HomePage;
