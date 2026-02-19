import "./Navbar.css";
import { useState, useEffect } from "react";

function Navbar({ darkMode, setDarkMode }) {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      let current = "home";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const sectionTop = element.offsetTop;
          if (window.scrollY >= sectionTop - 150) {
            current = section;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar" style={{
    background: darkMode ? "rgba(30, 41, 59, 0.8)" : "#e2e8f0",
    transition: "0.3s ease",
  }}>
      <div className="logo">Prathamesh</div>
      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        {["home", "about", "projects", "contact"].map((section) => (
          <li key={section}>
            <a
              href={`#${section}`}
              className={active === section ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          </li>
        ))}

        <li>
          <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "☀ Light" : "🌙 Dark"}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
