import React from "react";
import Education from "../pages/education/Education";
import WorkExperience from "../pages/workExperience/WorkExperience";
import "./experEdu.css";
const ExperEdu = () => {
  return (
    <div className="experEdu-container">
      <div className="exper-container">
        <Education />
        <WorkExperience />
      </div>
    </div>
  );
};

export default ExperEdu;
