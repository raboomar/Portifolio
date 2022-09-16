import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import Projects from "./pages/Projects/Projects.jsx";
import Skills from "./pages/Skills/Skills.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import AboutMe from "./pages/AboutMe/AboutMe.jsx";

import "./app.css";
import ExperEdu from "./components/ExperEdu.jsx";

function App() {
  return (
    <div className="container">
      <div className="profile-grid my-1">
        <LandingPage />
        {/* <Navbar /> */}
        <AboutMe />

        <Projects />
        <Skills />
        <ExperEdu />
        <Contact />
      </div>
    </div>
  );
}

export default App;
