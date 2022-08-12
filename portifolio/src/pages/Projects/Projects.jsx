import "./projects.css";

function Projects() {
  return (
    <div id="projects" className="skills">
      <div className="skill-title">
        <h2 className="project-title">Projects</h2>
      </div>

      <div className="project-row">
        <img
          className="project-left"
          src="https://i.imgur.com/yYFvI9k.png"
          alt="code-img"
        />
        <div className="">
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
      {/* <div class="skill-row">
        <img
          class="project-right"
          src="https://cdn.programadoresbrasil.com.br/wp-content/uploads/2021/05/spring-framework.png"
          alt="chillies-img"
        />

        <h3 className="tech-title">project 2</h3>
        <div className="toolsList">
          <p className="about-project-right">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            voluptatum non aspernatur quisquam quos, et ipsa adipisci dolorum
            corrupti deleniti natus voluptas officiis? Consequatur nulla
            debitis, minima repudiandae alias iusto?
          </p>
        </div>
      </div> */}
      {/* <div class="skill-row">
        <img
          class="project-left"
          src="https://miro.medium.com/max/1400/1*ulD6na_hQsXA5uC0acoteA.png"
          alt="code-img"
        />
        <h3 className="tech-title">Project 3</h3>
        <div className="toolsList">
          <p className="about-project-right">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            voluptatum non aspernatur quisquam quos, et ipsa adipisci dolorum
            corrupti deleniti natus voluptas officiis? Consequatur nulla
            debitis, minima repudiandae alias iusto?
          </p>
        </div>
      </div> */}
    </div>
  );
}

export default Projects;
