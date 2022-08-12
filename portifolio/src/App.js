import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import Projects from "./pages/Projects/Projects.jsx";
import Skills from "./pages/Skills/Skills.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AboutMe from "./pages/AboutMe/AboutMe.jsx";
import Education from "./pages/education/Education.jsx";
import Navbar from "./components/Navbar.jsx";
import WorkExperience from "./pages/workExperience/WorkExperience.jsx";
import "./app.css";

function App() {
  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
          <LandingPage />
          <Navbar />
          <AboutMe />
          <WorkExperience />
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
