import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand>Rami Aboomar</Navbar.Brand>
          <Nav className="d-flex">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/skills");
              }}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/projects");
              }}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/contact");
              }}
            >
              Contact Me
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
