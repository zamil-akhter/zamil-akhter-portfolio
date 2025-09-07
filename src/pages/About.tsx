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
              I am a backend-focused software developer with nearly two years of professional experience delivering scalable, high-performance web applications. I specialize in NestJS and MongoDB, with strong expertise in real-time communication using Socket.IO and WebRTC.
            </p>
            <p>
              I excel at building robust APIs, secure authentication systems, and seamless integrations such as Stripe and Firebase notifications. I thrive on turning complex ideas into efficient, production-ready solutions, ensuring smooth and reliable user experiences. For me, software development is not just coding—it’s crafting meaningful and impactful digital products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
