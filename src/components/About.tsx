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
    expertise in C/C++, Java, Python, SQL, and modern web development.
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

  <p>As an MCA student and aspiring Java Developer,
     I am committed to continuous learning and building practical software solutions. 
     I look forward to contributing to meaningful projects while enhancing my technical skills
      and growing as a software professional.</p>
</div>

          {/* RIGHT SIDE */}
          <div className="about-right">

            <div className="about-box">
              <h3>Education</h3>
              <p><b><h2>Master of Computer Applications (MCA) </h2></b></p>

Currently pursuing MCA with a focus on
Java Programming, Database Management,
and Software Development.
            </div>

            <div className="about-box">
              <h3>Experience</h3>
              <p>Fresher | Early Career Developer
Focused on Java & Full-Stack Development. Ready to learn and contribute.</p>
            </div>

            <div className="about-box">
              <h3>Core Strength</h3>
              <p>Languages Proficiency  : Java • Python • C • C++ • Sql</p>
            </div>

            {/* <div className="about-box">
              <h3>Mindset</h3>
              <p>Consistency • Learning • Innovation</p>
            </div> */}

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;