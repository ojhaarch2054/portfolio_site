import React from "react";
import "../styles/contact.css";
import axios from "axios";
import { useState } from "react";

const Contact = () => {
  //state to store email
  const [email, setEmail] = useState("");
  //to store msg
  const [message, setMessage] = useState("");
  //state to store status
  const [status, setStatus] = useState("");

  //to handle sending message
  const sendBtn = async () => {
    console.log("sent");
    console.log("Sending message...");
    console.log({ email, message });
    try {
      //post rqst to backend with email and msg
      const response = await axios.post("http://localhost:3000/send", {
        email,
        message,
      });
      console.log("Response received:", response.data);
      //update status with server response
      setStatus(response.data.message);
      setEmail("")
      setMessage("")
    } catch (error) {
      console.error("Error occurred:", error);
      //update status on fail
      setStatus("Failed to send message.");
    }
  };

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
              <button className="btn sendBtn" onClick={sendBtn}>
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
