import "./Footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>Prathamesh Bharade</h3>
          <p>Full Stack Developer</p>
        </div>

        <div className="footer-action">
          <button className="back-to-top-btn" onClick={scrollToTop}>
            Back to Home ↑
          </button>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Prathamesh Bharade. All rights reserved.</p>
        <div className="footer-social-minimal">
          <a href="https://github.com/pratham-bharade" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/prathamesh-bharade-02694428b" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
