require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
 //enable cors
 app.use(cors({ origin: "http://localhost:5173" })); 
 //parse json rqst
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello Archana')
  })

//configure email transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

//post rqst to send email
app.post("/send", (req, res) => {
    console.log("Request received:", req.body);
    const { email, message } = req.body;
    
    if (!email || !message) {
        return res.status(400).json({ message: 'Email and message are required.' });
      }
    const mailOptions = {
      from: email,
      to: process.env.EMAIL,
      subject: "New Contact Form Submission",
      text: `Email: ${email}\nMessage: ${message}`,
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({ error });
      }
      console.log("Email sent:", info.response);
      res.status(200).json({ message: "Email sent successfully!" });
    });

  //send mail
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ error });
    }
    res.status(200).json({ message: "Email sent successfully!" });
  });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
  })