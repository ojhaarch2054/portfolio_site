import "bootstrap/dist/css/bootstrap.min.css";
import AboutPage from "./components/AboutPage";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contacts from "./components/Contact";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <>
      <NavBar />
      <div id="home" className="container mt-5"><HomePage /></div>
      <div id="about" className="container mt-5"><AboutPage /></div>
      <div id="projects" className="container mt-5"><Projects /></div>
      <div id="skills" className="container mt-5"><Skills /></div>
      <div id="contacts" className="container mt-5"><Contacts /></div>
    </>
  );
};

export default App;
