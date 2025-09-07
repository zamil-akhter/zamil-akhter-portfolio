import SkillCard from "../components/SkillCard";
import "./Skills.css";

interface Skill {
  name: string;
  percentage: number;
  color: string;
}

function Skills() {
  // --- Core Backend ---
  const backendSkills: Skill[] = [
    { name: "Node.js", percentage: 95, color: "#43853d" },
    { name: "NestJS", percentage: 90, color: "#e11d48" },
    { name: "Express.js", percentage: 88, color: "#3b82f6" },
    { name: "TypeScript", percentage: 92, color: "#3178c6" },
  ];

  // --- Databases & Caching ---
  const databaseSkills: Skill[] = [
    { name: "MongoDB", percentage: 85, color: "#10b981" },
    { name: "PostgreSQL", percentage: 80, color: "#336791" },
    { name: "Redis", percentage: 75, color: "#dc2626" },
  ];

  // --- Frontend ---
  const frontendSkills: Skill[] = [
    { name: "JavaScript", percentage: 85, color: "#f7df1e" },
    { name: "React.js", percentage: 90, color: "#61dafb" },
    { name: "HTML5", percentage: 90, color: "#e34f26" },
    { name: "CSS3", percentage: 90, color: "#264de4" },
  ];

  // --- Mobile Development ---
  const mobileSkills: Skill[] = [
    { name: "Flutter", percentage: 70, color: "#02569B" },
    { name: "Dart", percentage: 70, color: "#0175C2" },
  ];

  // --- DevOps & APIs ---
  const devopsSkills: Skill[] = [
    { name: "REST API Design", percentage: 92, color: "#06b6d4" },
    { name: "JWT Authentication", percentage: 88, color: "#8b5cf6" },
    // { name: "GraphQL", percentage: 70, color: "#e10098" },
    { name: "Docker", percentage: 82, color: "#0ea5e9" },
    { name: "AWS", percentage: 75, color: "#ff9900" },
    // { name: "CI/CD (GitHub Actions)", percentage: 85, color: "#0366d6" },
    // { name: "Microservices", percentage: 80, color: "#7c3aed" },
  ];

  // --- Tools & Others ---
  const toolsSkills: Skill[] = [
    { name: "Git & GitHub", percentage: 95, color: "#F1502F" },
    { name: "Linux", percentage: 80, color: "#FCC624" },
    { name: "VS Code", percentage: 95, color: "#007ACC" },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h1>Skills & Expertise</h1>
        <p>A comprehensive toolkit for building modern digital experiences</p>
        <div className="skills-grid">
          <SkillCard title="Backend" skills={backendSkills} />
          <SkillCard title="Databases & Caching" skills={databaseSkills} />
          <SkillCard title="DevOps & APIs" skills={devopsSkills} />
          <SkillCard title="Frontend" skills={frontendSkills} />
          <SkillCard title="Mobile Development" skills={mobileSkills} />
          <SkillCard title="Tools & Others" skills={toolsSkills} />
        </div>
      </div>
    </section>
  );
}

export default Skills;
