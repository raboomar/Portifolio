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
        <img
          class="code-img"
          src="https://miro.medium.com/max/1400/1*ulD6na_hQsXA5uC0acoteA.png"
          alt="code-img"
        />
        <h3 className="tech-title">Front end</h3>
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
            <li>Micro Frontends</li>
          </ul>
        </div>
      </div>
      <div class="skill-row">
        <img
          class="chilli-img"
          src="https://cdn.programadoresbrasil.com.br/wp-content/uploads/2021/05/spring-framework.png"
          alt="chillies-img"
        />

        <h3 className="tech-title">Back End</h3>
        <div className="toolsList">
          <ul>
            <li>Spring Boot </li>
            <li>Java</li>
            <li>Node.js</li>
            <li>MySQL</li>
          </ul>
          <ul>
            <li>NoSQL </li>
            <li>Firebase </li>
            <li>AWS</li>
            <li>HTML</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
