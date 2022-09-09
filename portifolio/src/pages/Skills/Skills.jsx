import "./skill.css";

function Skills() {
  return (
    <div id="skills" className="profile-skills">
      <h2>Development Tools</h2>
      <div className="skills-grid">
        <div className="frontEnd-grid grid-item">
          <div className="skills-card">
            <div className="first-skill-row">
              <iconify-icon
                icon="icomoon-free:html-five2"
                width="40"
                height="40"
              ></iconify-icon>
              <h6>HTML</h6>
            </div>
            <div>
              <iconify-icon
                icon="fa-brands:css3-alt"
                width="40"
                height="40"
              ></iconify-icon>
              <h6>CSS</h6>
            </div>
            <div>
              <iconify-icon icon="cib:javascript"></iconify-icon>
              <h6>Javascript</h6>
            </div>

            <div>
              <iconify-icon
                icon="cib:react"
                width="40"
                height="40"
              ></iconify-icon>
              <h6>React</h6>
            </div>
            <div>
              <iconify-icon icon="simple-icons:redux"></iconify-icon>
              <h6>Redux</h6>
            </div>
            <div>
              <iconify-icon
                icon="cib:jest"
                width="40"
                height="40"
              ></iconify-icon>
              <h6>Jest</h6>
            </div>
            <div>
              <iconify-icon icon="bi:bootstrap"></iconify-icon>
              <h6>Bootstrap</h6>
            </div>
            <div>
              <iconify-icon icon="bi:git"></iconify-icon>
              <h6>Git</h6>
            </div>

            <div>
              <iconify-icon
                icon="cib:amazon-aws"
                width="40"
                height="40"
              ></iconify-icon>
              <h6>AWS</h6>
            </div>

            <div>
              <iconify-icon icon="cib:java"></iconify-icon>
              <h6>Java</h6>
            </div>
            <div>
              <iconify-icon icon="bxl:spring-boot"></iconify-icon>
              <h6>Springboot</h6>
            </div>
            <div>
              <iconify-icon icon="akar-icons:node-fill"></iconify-icon>
              <h6>Node js</h6>
            </div>

            <div>
              <iconify-icon icon="simple-icons:express"></iconify-icon>
              <h6>Express js</h6>
            </div>
            <div>
              <iconify-icon icon="bxl:mongodb"></iconify-icon>
              <h6>MongoDb</h6>
            </div>
            <div>
              <iconify-icon icon="fontisto:mysql"></iconify-icon>
              <h6>MySQL</h6>
            </div>
            <div>
              <iconify-icon
                icon="bxl:firebase"
                width="40"
                height="40"
              ></iconify-icon>
              <h6>Firebase</h6>
            </div>
            <div>
              <iconify-icon
                icon="akar-icons:npm-fill"
                width="40"
                height="40"
              ></iconify-icon>
              <h6>NPM</h6>
            </div>
            <div>
              <iconify-icon
                icon="akar-icons:github-fill"
                width="40"
                height="40"
              ></iconify-icon>
              <h6>Github</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
