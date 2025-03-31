import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contacts from "./components/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;