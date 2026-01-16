import "./Skills.css";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "DotNet MVC",
  "React JS",
  "DotNet WebAPI",
  "Git",
  "MS SQL",
     

];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
