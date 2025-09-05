import SkillCard from "../components/SkillCard";
import "./Skills.css";

interface Skill {
  name: string;
  percentage: number;
  color: string;
}

function Skills() {
  const frontendSkills: Skill[] = [
    { name: "JavaScript", percentage: 85, color: "#fbbf24" },
    { name: "React.js", percentage: 90, color: "#3b82f6" },
    { name: "Next.js", percentage: 90, color: "#ef4444" },
    { name: "Redux", percentage: 92, color: "#8b5cf6" },
    { name: "Tailwind CSS", percentage: 90, color: "#14b8a6" }
  ];

  const backendSkills: Skill[] = [
    { name: "Python", percentage: 85, color: "#fbbf24" },
    { name: "FastAPI", percentage: 90, color: "#3b82f6" },
    { name: "DRF (Django Rest Framework)", percentage: 90, color: "#8b5cf6" },
    { name: "Django", percentage: 85, color: "#10b981" },
    { name: "PostgreSQL", percentage: 80, color: "#84cc16" }
  ];

  const cloudAiSkills: Skill[] = [
    { name: "Git", percentage: 95, color: "#f97316" },
    { name: "REST API Integration", percentage: 90, color: "#06b6d4" },
    { name: "OpenAI Integration", percentage: 85, color: "#8b5cf6" },
    { name: "AWS", percentage: 70, color: "#f59e0b" },
    { name: "CI/CD (GitHub Actions)", percentage: 85, color: "#ef4444" }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-grid">
          <SkillCard title="Backend" skills={backendSkills} />
          <SkillCard title="Frontend" skills={frontendSkills} />
          <SkillCard title="Cloud & AI Tools" skills={cloudAiSkills} />
        </div>
      </div>
    </section>
  );
}

export default Skills;
