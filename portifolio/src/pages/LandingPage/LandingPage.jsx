import "./landingPage.css";

function LandingPage() {
  return (
    <div className="profile-top  p-2">
      <img
        className="me"
        src={require("../../Images/IMG_4713.jpg")}
        alt="Rami-profile-img"
      />
      <div className="title-text">
        <h1>I'm Rami Aboomar.</h1>

        <h2>A Full-Stack Developer</h2>
      </div>
    </div>
  );
}

export default LandingPage;
