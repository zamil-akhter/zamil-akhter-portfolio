import ProjectCard from "../components/ProjectCard";
import "./Projects.css";

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          <ProjectCard 
            title="Project 1" 
            description="Description of your first project."
            liveUrl="#"
            githubUrl="#"
          />
          <ProjectCard 
            title="Project 2" 
            description="Description of your second project."
            liveUrl="#"
            githubUrl="#"
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;
