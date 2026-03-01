import "./About.css";

function About() {
  return (
    <section className="about" id="about">

      <div className="about-container">

        <div className="about-header">
          <span className="about-label">WHO I AM</span>
          <h1 className="about-heading">
            Building Digital Solutions With
            <br />
            Precision & Purpose
          </h1>
        </div>

        <div className="about-content">

          {/* LEFT SIDE */}
          <div className="about-left">
  <p>
    With a solid background in Computer Applications, I have developed strong 
    expertise in C, C++, Java, Python, SQL, and modern web development.
  </p>

  <p>
    My active involvement in sports has shaped my communication skills, 
    teamwork, and ability to coordinate effectively within groups — qualities 
    that translate directly into collaborative software development.
  </p>

  <p>
    I approach every project with discipline, clarity, and a mindset focused 
    on both technical excellence and team success.
  </p>
</div>

          {/* RIGHT SIDE */}
          <div className="about-right">

            <div className="about-box">
              <h3>Education</h3>
              <p>MSc Computer Applications</p>
            </div>

            <div className="about-box">
              <h3>Experience</h3>
              <p>Full‑Stack Web Projects</p>
            </div>

            <div className="about-box">
              <h3>Core Strength</h3>
              <p>Backend Systems & Database Design</p>
            </div>

            <div className="about-box">
              <h3>Mindset</h3>
              <p>Consistency • Learning • Innovation</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;