import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h3>Prathamesh Bharade</h3>
          <p>Frontend Developer</p>
        </div>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-social">
          <a href="https://github.com/pratham-bharade" target="_blank">GitHub</a>
          <a href="https://linkedin.com/in/prathamesh-bharade-02694428b" target="_blank">LinkedIn</a>
          <a href="https://instagram.com/your-username" target="_blank">Instagram</a>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Prathamesh Bharade. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
