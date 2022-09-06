import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import Projects from "./pages/Projects/Projects.jsx";
import Skills from "./pages/Skills/Skills.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import AboutMe from "./pages/AboutMe/AboutMe.jsx";
import Education from "./pages/education/Education.jsx";
import Navbar from "./components/Navbar.jsx";
import WorkExperience from "./pages/workExperience/WorkExperience.jsx";
import "./app.css";

function App() {
  return (
    <div className="profile-grid my-1">
      <LandingPage />
      {/* <Navbar /> */}
      <AboutMe />
      <WorkExperience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
