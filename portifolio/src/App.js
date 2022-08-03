import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import Projects from "./pages/Projects/Projects.jsx";
import Skills from "./pages/Skills/Skills.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./app.css";

import AboutMe from "./pages/AboutMe/AboutMe.jsx";
import Education from "./pages/education/Education.jsx";
function App() {
  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
          <LandingPage />
          <AboutMe />
          <Education />
          <Projects />
          <Skills />

          <Contact />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
