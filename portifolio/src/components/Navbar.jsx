import React from "react";

import { Link } from "react-scroll";
import "./navBar.css";
const Header = () => {
  return (
    <div className="links">
      <Link to="experience">Experience</Link> |
      <Link to="projects"> Projects</Link> |<Link to="skills"> Skills</Link> |
      <Link to="education"> Education</Link> |
      <Link to="contact"> Contact </Link>
    </div>
  );
};

export default Header;
