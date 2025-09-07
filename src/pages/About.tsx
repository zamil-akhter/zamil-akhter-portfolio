import "./About.css";
import aboutImg from "../assets/images/about.jpg"; 

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <p className="subtitle">
          Passionate full stack developer crafting scalable, intelligent web solutions
          that deliver meaningful digital experiences.
        </p>

        <div className="about-content">
          <div className="about-image">
            <img src={aboutImg} alt="About Me" />
          </div>
          <div className="about-text">
            <p>
              I am a passionate full stack developer with almost two years of experience
              bringing ideas to life through modern, high-performance web applications.
              I love working with React.js and Next.js on the frontend, and Python, Django,
              DRF, and FastAPI on the backend to create smooth, reliable experiences.
            </p>
            <p>
              I enjoy solving problems and turning concepts into scalable, real-world
              solutions. Along the way, I have gained strong skills in AWS and API
              integrations. For me, creating software is not just coding, it’s building
              meaningful digital experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
