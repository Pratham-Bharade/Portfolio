import "./Footer.css";
import { ArrowUp, Github, Linkedin, Instagram, Mail, Heart, Code2 } from "lucide-react";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Column */}
        <div className="footer-brand">
          <div className="brand-title">
            <span className="brand-first">Prathamesh</span>
            <span className="brand-last">Bharade</span>
          </div>
          <p className="brand-sub">
            Full-Stack, Java & Python Developer | MCA Scholar
          </p>
          <p className="brand-bio">
            Building scalable digital solutions, responsive web applications, and database architectures with precision.
          </p>
        </div>

        {/* Quick Links Column */}
        <div className="footer-nav-col">
          <h4 className="footer-col-title">Navigation</h4>
          <ul className="footer-links">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="footer-nav-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect & Top Action */}
        <div className="footer-action-col">
          <h4 className="footer-col-title">Connect</h4>
          <div className="footer-social-icons">
            <a
              href="https://github.com/pratham-bharade"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="footer-icon-link"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/prathamesh-bharade-02694428b"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="footer-icon-link"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://www.instagram.com/mee_ahee/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="footer-icon-link"
            >
              <Instagram size={18} />
            </a>
            <a
              href="mailto:prathambharade@gmail.com"
              aria-label="Email"
              className="footer-icon-link"
            >
              <Mail size={18} />
            </a>
          </div>

          <button className="back-to-top-btn" onClick={scrollToTop}>
            <span>Back to Top</span>
            <ArrowUp size={15} />
          </button>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Prathamesh Bharade. All rights reserved.</p>
        <p className="footer-tech-credit">
          Crafted with React & TypeScript
        </p>
      </div>
    </footer>
  );
}

export default Footer;
