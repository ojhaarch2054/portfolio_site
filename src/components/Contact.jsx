import React from 'react';

const Contact = () => {
  return (
    <div className='container'>
      <h1 className="text-center">Contact Me</h1>
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

      <button>Send</button>
    </div>
  );
};

export default Contact;