import React, { createContext, useState } from "react";
import axios from "axios";

// Create the context
export const MessageContext = createContext();

// Create the provider component
export const MessageProvider = ({ children }) => {
  //to store email
  const [email, setEmail] = useState("");
  //to store message
  const [message, setMessage] = useState("");
  //to check the status
  const [status, setStatus] = useState("");

  const sendBtn = async () => {
    console.log("sent");
    console.log("Sending message...");
    console.log({ email, message });
    try {
      const response = await axios.post("http://localhost:3000/send", {
        email,
        message,
      });
      console.log("Response received:", response.data);
      setStatus(response.data.message);
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error occurred:", error);
      setStatus("Failed to send message.");
    }
  };

  return (
    <MessageContext.Provider
      value={{
        email,
        setEmail,
        message,
        setMessage,
        status,
        sendBtn,
      }}
    >
      {children}
    </MessageContext.Provider>
  );
};
