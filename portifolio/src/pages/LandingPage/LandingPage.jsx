import me from "./me.jpeg";
import "./landingPage.css";

function LandingPage() {
  return (
    <div className="profile-top  p-2">
      <div className="img-container">
        <img className="me" src={me} alt="Rami-profile-img" />
      </div>
      <div className="title-text">
        <h1>I'm Rami Aboomar.</h1>

        <h2>A Full-Stack Developer</h2>
        <p>Columbus, Ohio</p>
        <div className="icons my-1">
          <a href="mailto:aboomar.2@osu.edu" target="email">
            <i className="fas fa-envelope fa-2x"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/rami-aboomar-4553a8b0/"
            target="linkedin"
          >
            <i className="fab fa-linkedin fa-2x"></i>
          </a>

          <a href="https://github.com/raboomar" target="github">
            <i className="fab fa-github fa-2x"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
