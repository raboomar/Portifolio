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
        <p
          style={{
            display: "flex",

            justifyContent: "center",
          }}
        >
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg"
            alt=""
            style={{ width: 35, height: 35 }}
          />

          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg"
            alt=""
            style={{ width: 35, height: 35 }}
          />
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg"
            alt=""
            style={{ width: 35, height: 35 }}
          />
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg"
            alt=""
            style={{ width: 35, height: 35 }}
          />
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/webpack-colored.svg"
            alt=""
            style={{ width: 35, height: 35 }}
          />

          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/babel-colored.svg"
            alt=""
            style={{ width: 35, height: 35 }}
          />
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg"
            alt=""
            style={{ width: 35, height: 35 }}
          />
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/redux-colored.svg"
            alt=""
            style={{ width: 35, height: 35 }}
          />
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/java-colored.svg"
            alt=""
            style={{ width: 35, height: 35 }}
          />
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg"
            alt=""
            style={{ width: 35, height: 35 }}
          />
        </p>
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
