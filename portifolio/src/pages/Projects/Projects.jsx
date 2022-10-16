import "./projects.css";

function Projects() {
  return (
    <div id="projects" className="profile-projects">
      <div className="project-title">
        <h2 className="project-title-word">Projects</h2>
      </div>
      <div className="project-container">
        <div className="project1 project">
          <div className=" project-box">
            <div>
              <h3>Daily Salah</h3>
              <p>
                <strong>App Store Link:</strong>
                <a href="https://apps.apple.com/us/app/daily-salah/id1628694786?platform=iphone">
                  Daily Salah
                </a>
              </p>
              <p>
                <strong>Description: </strong>An Ad free app that allows Muslims
                around the world to quickly and easily identify the correct
                prayer times with notifications for each prayer time throughout
                the day, with the option to disable notifications available. The
                app also allowed Muslims to identify the direction towards Mecca
                for their Salah (prayer) with our simple and elegant Qibla.
              </p>
              <div className="tech-stack">
                <p>
                  <div className="tech-title">
                    <strong>Technologies:</strong>
                  </div>
                  <strong>Front-end:</strong> React Native, Redux Toolkit
                  <br />
                  <strong> Back-end: </strong>
                  Express.js, Firebase Cloud Firestore, Cloud Functions . <br />
                  <strong>Deployment: </strong>
                  Expo/EAS.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="project2 project">
          <div className="project2-box ">
            <div>
              <h3>Krusty Krab</h3>
              <p>
                <strong> Link:</strong>
                <a href="https://main.d3cgji0ctlpyfv.amplifyapp.com/">
                  The Krusty Krab
                </a>
              </p>
              <p>
                <strong>Description: </strong>Applied SOLID principles and
                design patterns like Singleton to create a fake Krusty Krab
                e-commerce site. <br /> Key features: A product page view that
                displays products, a product detail view, and a shopping cart
                view that allows for purchase functionality.
                <br />
                Forthcoming features: Admin dashboard to view orders and update
                menu items, customer login for viewing past orders.
              </p>
              <p>
                <strong> Technologies: </strong>
                <br />
                Front-end: React Native, Redux Toolkit, CSS <br />
                Back-end: Node.Js, Express.Js, AWS DynamoDB
                <br />
                Deployment: AWS Amplify, Elastic Beanstalk and Route 53.
              </p>
            </div>
          </div>
        </div>

        <div className="project3 project">
          <div>
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

        <div className="project4 project">
          <div className="project-boxLower">
            <div>
              <h3>My Library</h3>
              <p>
                <strong> Link:</strong>
                <a href="https://ramibooklibrary.herokuapp.com/">My Library</a>
              </p>
              <p>
                <strong>Description: </strong> A book collection manager, where
                you can add, remove, and update books. Users are required to
                have an account. if you would like to check it out please
                register
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
      </div>
    </div>
  );
}

export default Projects;
