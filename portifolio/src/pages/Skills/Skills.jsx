import "./skill.css";

function Skills() {
  return (
    <div class="skills">
      <div class="skill-row">
        <h2>Technology</h2>
        <p>
          some of the tools I have been working with recently both as an
          individual developer and in a team setting. My ever-growing skillset
          is driven by enthusiastic curiosity as I continue to learn and create
          with new technologies and languages.
        </p>
      </div>

      <div class="skill-row">
        {/* <img
          class="code-img"
          src="https://miro.medium.com/max/1400/1*ulD6na_hQsXA5uC0acoteA.png"
          alt="code-img"
        /> */}
        {/* <h3 className="tech-title-front">Front end</h3> */}
        <div className="toolsList">
          <ul>
            <li>React </li>

            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
          <ul>
            <li>Redux </li>
            <li>Material-UI</li>
            <li>Bootstrap</li>
            <li>AWS</li>
          </ul>

          <div className="toolsList-backend">
            {/* <h3 className="tech-title-back">Back End</h3> */}
            <ul title="Back end">
              <li>Spring Boot </li>
              <li>Java</li>
              <li>Node.js</li>
              <li>MySQL</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="skill-row">
        {/* <img
          class="backend-img"
          src="https://cdn.programadoresbrasil.com.br/wp-content/uploads/2021/05/spring-framework.png"
          alt="chillies-img"
        /> */}
      </div>
    </div>
  );
}

export default Skills;
