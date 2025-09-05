import profilePic from '../assets/images/profile-pic.jpg';

function Hero() {
  return (
    <div className="hero">
      <img src={profilePic} alt="profile" className="profile-pic" />
      <h1>Zamil Akhter</h1>
      <h3>Software Developer</h3>
      <p>
      Backend-focused software developer skilled in NestJS, MongoDB, and real-time systems (Socket.IO, WebRTC). 
      Experienced in building scalable APIs and secure authentication, with a focus on performance, reliability, and user experience.
      </p>
    </div>
  );
}

export default Hero;
