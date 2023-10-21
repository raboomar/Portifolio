import React from "react";
import "./experience.css";
import experience from "./experience.json";
const WorkExperience = () => {
  return (
    <div className="profile-exp">
      <h2>Experience</h2>
      {experience.map((job) => (
        <div key={job.title} className="work-grid">
          <div className="work--title">
            <h3>{job.title}</h3>
            <p className="work--position--text">
              <strong>Position: </strong>
              {job.position}
            </p>
          </div>
          <p className="work--date">{job.date}</p>
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;
