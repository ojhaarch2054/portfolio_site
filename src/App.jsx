import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import AOS from "aos";
import React, { useEffect } from "react";
import AboutPage from "./components/AboutPage";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contacts from "./components/Contact";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import "./styles/app.css"
import { MessageProvider } from "./context/MessageContext";

const App = () => {
  useEffect(() => {
    //initializing aos
    AOS.init({
       //duration of the animation
      duration: 1000,
       //to make animation run everytime when scrolling
      once: false,
      //offset to trigger animation a bit earlier or later
      offset: 100, 
    });
  }, []);

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
    <MessageProvider>
      <NavBar />
      <div id="home" className="container mt-2" data-aos="fade-up">
        <HomePage />
      </div>
      <div id="about" className="container mt-5" data-aos="fade-up">
        <AboutPage />
      </div>
      <div id="projects" className="container mt-5" data-aos="fade-up">
        <Projects />
      </div>
      <div id="skills" className="container mt-5" data-aos="fade-up">
        <Skills />
      </div>
      <div id="contacts" className="container mt-5" data-aos="fade-up">
        <Contacts />
      </div>

      {/*back to top btn*/}
      <button
        className="btn position-fixed bottom-0 end-0 m-3 backToTop"
        onClick={backToTop}
      >
        Back to Top
      </button>
      </MessageProvider>
    </>
  );
};

export default App;
