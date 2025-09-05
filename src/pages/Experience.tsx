import "./Experience.css";

function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="experience-header">
          <h2>Experience</h2>
          <p className="experience-subtitle">My professional journey and key achievements</p>
          <button className="download-cv-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 15L12 3M12 15L8 11M12 15L16 11M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Download CV
          </button>
        </div>
        
        <div className="timeline">
          <div className="timeline-item left">
            <div className="timeline-content">
              <div className="timeline-date">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                  <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2"/>
                  <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2"/>
                  <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2"/>
                </svg>
                Jan 2025 – Present
              </div>
              <h3>Backend Developer</h3>
              <h4>Sunfocus Solutions Pvt. Ltd.</h4>
              <div className="location">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.3639 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                </svg>
                Chandigarh, India
              </div>
              <p className="description">
                Contributing to the development of scalable web applications, leveraging expertise in JavaScript, Python, React.js, Next.js, FastAPI, Django, DRF, PostgreSQL, OpenAI and AWS services.
              </p>
              <ul className="achievements">
                <li>Developed Stayzy, a property management platform with automated guest messaging, AI-powered issue detection, booking management, and analytics dashboard.</li>
                <li>Built Social5G features including advanced influencer search, real-time chat via Socket.IO, engagement analytics, and integrated payment systems.</li>
                <li>Integrated Redux for efficient state management, improving scalability and reducing load times by 30%.</li>
                <li>Optimized backend performance using FastAPI, Django, and DRF.</li>
              </ul>
            </div>
          </div>
          
          <div className="timeline-item right">
            <div className="timeline-content">
              <div className="timeline-date">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                  <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2"/>
                  <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2"/>
                  <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2"/>
                </svg>
                July 2024 – Dec 2024
              </div>
              <h3>NodeJS Intern</h3>
              <h4>Sunfocus Solutions Pvt. Ltd.</h4>
              <div className="location">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.3639 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                </svg>
                Chandigarh, India
              </div>
              <p className="description">
                Contributed to the development of a property management platform, focusing on real-world problem-solving and full-stack development.
              </p>
              <ul className="achievements">
                <li>Developed Government Fund Monitoring System to track and ensure transparency in fund allocation across departments</li>
                <li>Created responsive web applications using React.js and Node.js</li>
                <li>Implemented RESTful APIs using Express.js and MongoDB</li>
                <li>Delivered high-quality software solutions for various clients</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
