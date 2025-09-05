interface Skill {
  name: string;
  percentage: number;
  color: string;
}

interface SkillCardProps {
  title: string;
  skills: Skill[];
}

function SkillCard({ title, skills }: SkillCardProps) {
  return (
    <div className="skill-category">
      <h3>{title}</h3>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-info">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-percentage">{skill.percentage}%</span>
            </div>
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ 
                  width: `${skill.percentage}%`,
                  backgroundColor: skill.color
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillCard;
