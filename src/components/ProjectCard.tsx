interface ProjectCardProps {
  title: string;
  description: string;
  liveUrl?: string;
  githubUrl?: string;
}

function ProjectCard({ title, description, liveUrl, githubUrl }: ProjectCardProps) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="project-links">
        {liveUrl && <a href={liveUrl} className="btn">Live Demo</a>}
        {githubUrl && <a href={githubUrl} className="btn">GitHub</a>}
      </div>
    </div>
  );
}

export default ProjectCard;
