import "./projects.css";

function Projects() {
  return (
    <div id="projects" className="profile-projects">
      <div className="skill-title">
        <h2 className="project-title">Projects</h2>
      </div>

      <div className="project-row">
        {/* <img
          className="project-left"
          src="https://i.imgur.com/yYFvI9k.png"
          alt="code-img"
        /> */}
        <div>
          <h3 className="tech-title">Admin Dashboard</h3>
          <div className="toolsList">
            <p>
              Link:
              <a href="https://main.d21nudikvh3ule.amplifyapp.com/">
                User Dashboard
              </a>
            </p>
            <p className="about-project-right">
              This is a full stack website that allows users to cerate, read,
              update, and delete (CRUD) users as they please.
              <br />
              Technologies: Front-end: React.js, antd-design.
              <br />
              Back-end: Spring Boot API, Spring JPA.
              <br />
              Deployment: AWS RDS, Elastic BeanStalk, Amplify, and Route 53.
            </p>
          </div>
        </div>
      </div>
      <div className="project-row">
        <div>
          <h3 className="tech-title">Rock Paper Scissors</h3>
          <div className="toolsList">
            <p className="project-link">
              Link:
              <a href="https://raboomar.github.io/-rock-paper-scissors/">
                Man VS Computer
              </a>
            </p>

            <p className="about-project-right">
              Implemented the classic grad-school game "Rock Paper Scissors
              which allowed me to practice my vanilla javascript and CSS
              <br />
              Technologies: HTML, CSS, Javascript.
              <br />
              Deployment: Github pages.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
