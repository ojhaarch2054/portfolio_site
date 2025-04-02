import React from "react";
import "../styles/contact.css";
import { useContext } from "react";
import { MessageContext } from "../context/MessageContext";

const Contact = () => {
  const { email, setEmail, message, setMessage, status, sendBtn } =
  useContext(MessageContext);

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Contact Me</h2>
      <p className="text-center">Please fill out the form to get in touch!</p>
      <div className="d-flex justify-content-center">
        <div className="card shadow cardWidth">
          <div className="card-body">
            <div className="mb-4">
              <label className="form-label">Email address:</label>
              <input
                type="email"
                className="form-control"
                id="input1"
                value={email}
                placeholder="Enter your email address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="form-label">Message:</label>
              <textarea
                className="form-control"
                id="input2"
                value={message}
                rows="5"
                placeholder="Enter your message"
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div className="text-center">
              <button className="btn sendBtn shadow" onClick={sendBtn}>
                Send
              </button>
            </div>
            {/*display status msg*/}
            {status && <p className="text-center mt-3">{status}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
