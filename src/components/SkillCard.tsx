interface SkillCardProps {
  title: string;
  skills: string[];
}

function SkillCard({ title, skills }: SkillCardProps) {
  return (
    <div className="skill-category">
      <h3>{title}</h3>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default SkillCard;
