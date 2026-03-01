import "./Hero.css";
import m2 from "../assets/m2.jpg";
function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        {/* Background Text */}
        <div className="portfolio-bg-text">
          <span className="p-char">P</span>
          <span className="o1-char">O</span>
          <span className="r-char">R</span>
          <span className="t-char">T</span>
          <span className="f-char">f</span>
          <span className="o2-char">O</span>
          <span className="l-char">L</span>
          <span className="i-char">i</span>
          <span className="o3-char">O</span>
        </div>

        {/* Character Image */}
        <div className="character-wrapper">
          <img 
           src={m2}  
            alt="Prathamesh Bharade" 
            className="character-img"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Hero Info (Left Side) */}
        <div className="hero-info">
          <div className="info-tag">AVAILABLE FOR HIRE</div>
          <h2 className="info-role">FULL-STACK<br />DEVELOPER</h2>
          <p className="info-bio">
            Specializing in building high-performance web applications 
            with modern technologies. Focused on clean code and 
            exceptional user experiences.
          </p>
          <div className="info-cta">
            <a href="#projects" className="cta-button">VIEW PROJECTS</a>
            <a href="#contact" className="cta-link">GET IN TOUCH</a>
          </div>
        </div>

        {/* Overlay Info (Right Side) */}
        <div className="hero-overlay">
          <div className="hero-name">
            <span className="name-label">PRATHAMESH</span>
            <span className="name-label">BHARADE</span>
          </div>
          <div className="hero-year">
            '22
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
