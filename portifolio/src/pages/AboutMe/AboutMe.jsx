import "./aboutMe.css";
import React from "react";

const AboutMe = () => {
  return (
    <div class="middle-container">
      <div class="profile">
        <img
          className="me"
          src={require("../../Images/IMG_4713.jpg")}
          alt="Rami-profile-img"
        />

        <p class="intro">I am self taught Full-Stack Developer.</p>
      </div>
      <hr />
    </div>
  );
};

export default AboutMe;
