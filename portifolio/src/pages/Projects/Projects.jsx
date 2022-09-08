import "./projects.css";

function Projects() {
  return (
    <div id="projects" className="profile-projects">
      <div className="project-title">
        <h2 className="project-title-word">Projects</h2>
      </div>
      <div className="project-container">
        <div className="project1">
          <div className=" project1-box">
            <div>
              <h3>My Library</h3>
              <p>
                <strong> Link:</strong>
                <a href="https://ramibooklibrary.herokuapp.com/">My Library</a>
              </p>
              <p>
                <strong>Description: </strong> A book collection manager, where
                you can add, remove, and update books.
                <p>
                  Users are required to have an account. if you would like to
                  check it out please use this login or register
                  <br /> email: test1@yahoo.com password: test12345
                </p>
              </p>
              <p>
                <strong> Technologies: </strong>
                <br />
                Front-end: React.js. Pure CSS Redux Toolkit
                <br />
                Back-end: Express.js, MongoDB. <br />
                Deployment: Heroku.
              </p>
            </div>
          </div>
        </div>

        <div className="project2">
          <div className=" project1-box">
            <div>
              <h3>Admin Dashboard</h3>
              <p>
                <strong> Link:</strong>
                <a href="https://main.d21nudikvh3ule.amplifyapp.com/">
                  User Dashboard
                </a>
              </p>
              <p>
                <strong>Description: </strong> This is a full stack website that
                allows users <br /> to cerate, read, update, and delete (CRUD)
                users as they please.
              </p>
              <p>
                <strong> Technologies: </strong>
                <br />
                Front-end: React.js, antd-design. <br />
                Back-end: Spring Boot API, Spring JPA. <br />
                Deployment: AWS RDS, Elastic BeanStalk, Amplify, and Route 53.
              </p>
            </div>
          </div>
        </div>

        <div className="project3">
          <div className="project2-box ">
            <div>
              <h3>Rock Paper Scissors</h3>
              <p>
                <strong> Link:</strong>
                <a href="https://raboomar.github.io/-rock-paper-scissors/">
                  Man VS Computer
                </a>
              </p>
              <p>
                <strong>Description: </strong> Implemented the classic
                grad-school game "Rock Paper Scissors <br /> which allowed me to
                practice my vanilla javascript and CSS
              </p>
              <p>
                <strong> Technologies: </strong>
                <br />
                Front-end: HTML, CSS, Javascript. <br />
                Deployment: Github pages.
              </p>
            </div>
          </div>
        </div>

        <div className="project4">
          <div className=" project1-box">
            <div>
              <h3>Coming Soon</h3>
              {/* <p>
                <strong> Link:</strong>
                <a href="https://main.d21nudikvh3ule.amplifyapp.com/">
                  User Dashboard
                </a>
              </p>
              <p>
                <strong>Description: </strong> This is a full stack website that
                allows users <br /> to cerate, read, update, and delete (CRUD)
                users as they please.
              </p>
              <p>
                <strong> Technologies: </strong>
                <br />
                Front-end: React.js, antd-design. <br />
                Back-end: Spring Boot API, Spring JPA. <br />
                Deployment: AWS RDS, Elastic BeanStalk, Amplify, and Route 53.
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
