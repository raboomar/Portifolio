import "./projects.css";

function Projects() {
  return (
    <div class="skills">
      <div class="skill-row">
        <h2 className="project-title">Projects</h2>
        <p>
          Here are a few of my projects. See more of my work on{" "}
          <a className="github-link" href="https://github.com/raboomar">
            Github
          </a>
        </p>
      </div>

      <div class="skill-row">
        <img
          class="project-left"
          src="https://miro.medium.com/max/1400/1*ulD6na_hQsXA5uC0acoteA.png"
          alt="code-img"
        />
        <h3 className="tech-title">Project 1</h3>
        <div className="toolsList">
          <p className="about-project-right">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            voluptatum non aspernatur quisquam quos, et ipsa adipisci dolorum
            corrupti deleniti natus voluptas officiis? Consequatur nulla
            debitis, minima repudiandae alias iusto?
          </p>
        </div>
      </div>
      <div class="skill-row">
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
      </div>
      <div class="skill-row">
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
      </div>
    </div>
  );
}

export default Projects;
