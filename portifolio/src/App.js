import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import Projects from "./pages/Projects/Projects.jsx";
import Skills from "./pages/Skills/Skills.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import "./app.css";
import Granim from "granim";
import AboutMe from "./pages/AboutMe/AboutMe.jsx";
function App() {
  return (
    <div className="App">
      <LandingPage />
      <AboutMe />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
