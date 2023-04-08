import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import Skills from "./pages/Skills/Skills.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import AboutMe from "./pages/AboutMe/AboutMe.jsx";
import ProjectCarousel from "./pages/Projects/ProjectCarousel.js";
import WorkExperience from "./pages/workExperience/WorkExperience.jsx";
import "./app.css";

function App() {
  return (
    <div className="container">
      <div className="profile-grid my-1">
        <LandingPage />
        <WorkExperience />
        <AboutMe />
        <ProjectCarousel />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;
