import "./Hero.css";
import { useState, useEffect } from "react";
import m2 from "../assets/m2.jpg";
function Hero() {
  

    const skills = [
    "FULL-STACK DEVELOPER",
    "SOFTWARE PROGRAMMER",
    "WEB ENGINEER",
    "BACKEND DEVELOPER",
    "PROBLEM SOLVER",
    "TECH ENTHUSIAST"
  ];

  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
        setFade(true);
      }, 500); // Half a second for fade out
    }, 4000); // Change skill every 3 seconds

    return () => clearInterval(interval);
  }, [skills.length]);


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
          <h2 className={`info-role ${fade ? "fade-in" : "fade-out"}`}>
            {skills[currentSkillIndex].split(" ").map((word, i) => (
              <span key={i}>{word}<br /></span>
            ))}
          </h2>
          <p className="info-bio">
          Versatile software developer experienced in programming, web development, and databases,
          focused on building reliable applications and solving real-world problems.
          </p>
         <div className="info-cta">
  <a href="#projects" className="cta-button">VIEW PROJECTS</a>
  <a href="#contact" className="cta-link">GET IN TOUCH</a>
</div>

<div className="resume-cta">
  <a
  href="/Portfolio/resume.html"
  
  rel="noopener noreferrer"
  className="cta-button"
>
  EXPLORE MY RESUME
</a>
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
