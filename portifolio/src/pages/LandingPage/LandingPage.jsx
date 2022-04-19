import "./landingPage.css";

function LandingPage() {
  return (
    <div>
      <div className="landing-text">
        <h1>Hi, I'm Rami Aboomar.</h1>
        <h1 className="landing-text-dev">
          A web <span className="dev">developer.</span>
        </h1>
      </div>

      <img src="https://i.imgur.com/vsebhro.png" className="landing-image" />
    </div>
  );
}

export default LandingPage;
