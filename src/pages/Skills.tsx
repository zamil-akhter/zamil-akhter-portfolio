import SkillCard from "../components/SkillCard";
import "./Skills.css";

function Skills() {
  const frontendSkills = ["React", "TypeScript", "HTML/CSS", "JavaScript"];
  const backendSkills = ["Python", "Node.js", "Express", "REST APIs"];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-grid">
          <SkillCard title="Frontend" skills={frontendSkills} />
          <SkillCard title="Backend" skills={backendSkills} />
        </div>
      </div>
    </section>
  );
}

export default Skills;
