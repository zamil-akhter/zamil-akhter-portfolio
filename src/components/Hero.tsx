import profilePic from '../assets/images/profile-pic.jpg';

function Hero() {
  return (
    <div className="hero">
      <img src={profilePic} alt="profile" className="profile-pic" />
      <h1>Zamil Akhter</h1>
      <h3>Software Developer</h3>
      <p>
        Software developer dedicated to building user-focused, 
        high-performance applications using Python, React, and modern web technologies.
      </p>
    </div>
  );
}

export default Hero;
