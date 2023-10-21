import "./skill.css";
import techSkills from "./techSkills.json";
function Skills() {
  return (
    <div id="skills" className="profile-skills">
      <h2>Development Tools</h2>
      <div className="skills-grid">
        <div className="frontEnd-grid grid-item">
          <div className="skills-card">
            {techSkills.map((skill) => (
              <div key={skill.name} className="first-skill-row">
                <iconify-icon icon={skill.iconName}></iconify-icon>
                <h6>{skill.name}</h6>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
