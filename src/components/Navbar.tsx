import { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "experience", "contact"];
      const scrollPosition = window.scrollY + 100;

      // Highlight active section
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }

      // Toggle logo shrink when scrolling
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <a href="#home">
            {/* Show full name on desktop, switch to ZA on mobile + scroll */}
            <span className={`logo-text ${isScrolled ? "scrolled" : ""}`}>
              Zamil Akhter
            </span>
            <span className={`logo-short ${isScrolled ? "scrolled" : ""}`}>
              ZA
            </span>
          </a>
        </div>

        {/* Hamburger */}
        <button className={`hamburger ${isOpen ? "active" : ""}`} onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Nav Links */}
        <ul className={`nav-menu ${isOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <li key={item.id} className="nav-item">
              <a
                href={`#${item.id}`}
                className={`nav-link ${activeSection === item.id ? "active" : ""}`}
                onClick={() => {
                  setActiveSection(item.id);
                  setIsOpen(false);
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
