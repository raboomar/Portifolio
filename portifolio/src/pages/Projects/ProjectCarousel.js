import React from "react";
import Carousel from "react-bootstrap/Carousel";
import projects from "./projects.json";
import "./projects.css";
const ProjectCarousel = () => {
  return (
    <div className="profile-projects">
      <div className="project-title">
        <h2 className="project-title-word">Projects</h2>
      </div>
      <Carousel indicators={false} className="carousel">
        {projects.map((project) => (
          <Carousel.Item key={project.name} className="carousel_item">
            <div>
              <h3>{project.name}</h3>
              <p>
                <strong>Link:</strong>
                <a href={project.link}>{project.name}</a>
              </p>
              <p className="project-desc">
                <strong>Description: </strong>
                {project.description}
              </p>
              <div className="">
                <div>
                  <div className="">
                    <strong>Technologies:</strong>
                  </div>
                  <strong>Front-end:</strong> {project.front}
                  <br />
                  <strong> Back-end: </strong>
                  {project.back}
                  <br />
                  <strong>Deployment: </strong>
                  {project.deployment}
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default ProjectCarousel;
