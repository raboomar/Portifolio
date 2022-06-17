import "./landingPage.css";

function LandingPage() {
  return (
    <section class="top-container">
      <img
        className="me"
        src={require("../../Images/IMG_4713.jpg")}
        alt="Rami-profile-img"
      />
      <div class="title-text">
        <h1>I'm Rami Aboomar.</h1>
        <h2>A Full-Stack Developer</h2>
      </div>
    </section>
  );
}

export default LandingPage;
