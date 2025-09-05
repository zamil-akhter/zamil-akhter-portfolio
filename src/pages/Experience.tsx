import "./Experience.css";

function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2>Experience</h2>
        <div className="timeline">
          <div className="timeline-item">
            <h3>Software Developer</h3>
            <h4>Company Name</h4>
            <p className="date">2023 - Present</p>
            <p>Description of your current role and responsibilities.</p>
          </div>
          <div className="timeline-item">
            <h3>Junior Developer</h3>
            <h4>Previous Company</h4>
            <p className="date">2022 - 2023</p>
            <p>Description of your previous role and achievements.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
