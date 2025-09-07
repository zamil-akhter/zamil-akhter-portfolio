import "./Footer.css";

import { GithubIcon, LinkedinIcon } from "lucide-react";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <p>&copy; 2026 Zamil Akhter. Software Developer</p>

        <div className="social-links">
          <a href={import.meta.env.VITE_CONTACT_GITHUB} target="_blank" rel="noopener noreferrer" className="social-btn github">
            <GithubIcon size={22} />
          </a>

          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="social-btn linkedin">
            <LinkedinIcon size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
