import "./Navbar.css";
import { useState, useEffect } from "react";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ["home", "about", "skills", "projects", "education", "contact"];
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
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">Prathamesh</div>

      {/* Hamburger */}
      <div
        className={`hamburger ${menuOpen ? "hide" : ""}`}
        onClick={() => setMenuOpen(true)}
      >
        ☰
      </div>

      {menuOpen && (
        <div className="overlay" onClick={() => setMenuOpen(false)}></div>
      )}

      {/* Sidebar */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        {/* Close Button */}
        <span className="close-btn" onClick={() => setMenuOpen(false)}>
          ✕
        </span>

        {["home", "about", "skills", "projects", "education", "contact"].map((section) => (
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
            onClick={() => {
              setDarkMode(!darkMode);
              setMenuOpen(false); // auto close
            }}
          >
            {darkMode ? "☀ Light" : "🌙 Dark"}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
