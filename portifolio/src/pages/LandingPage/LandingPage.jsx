import "./landingPage.css";

function LandingPage() {
  return (
    <div className="profile-top  p-2">
      <div className="img-container">
        <img
          className="me"
          alt="Rami-profile-img"
          src={
            "https://firebasestorage.googleapis.com/v0/b/dima-1b9e5.appspot.com/o/rami.jpeg?alt=media&token=c15aef6d-5ba7-4cdf-af2d-c4a58981d39d"
          }
        />
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
