import "./Education.css";

import school from "../assets/school.png";
import college from "../assets/college.png";
import degree from "../assets/degree.png";
import master from "../assets/master.png";

function Education() {
 const journey = [
  {
    title: "10th",
    year: "2018",
    place: "ABC High School",
    description: "Completed secondary education with strong academic foundation.",
    image: school,
    left: "9%",   // was 5%
    top: "80px",
  },
  {
    title: "12th",
    year: "2020",
    place: "XYZ Junior College",
    description: "Focused on science stream and core fundamentals.",
    image: college,
    left: "35%",  // was 30%
    top: "13px",
  },
  {
    title: "Bachelor's Degree",
    year: "2023",
    place: "University Name",
    description: "Completed graduation in Computer Science.",
    image: degree,
    left: "64%",  // was 60%
    top: "16px",
  },
  {
    title: "MSc (Current)",
    year: "2024 - Present",
    place: "University Name",
    description: "Pursuing Master's with specialization.",
    image: master,
    left: "91%",  // was 90% or 98%
     top: "3px",
    active: true,
  },
];

  return (
    <section className="education" id="education">
      <h2 className="education-title">My Learning Journey</h2>

      <div className="journey-container">
<svg viewBox="0 0 1100 250" className="journey-svg">
  <path
    d="M20 180
       C250 50, 450 250, 700 120
       S950 200, 1080 140"
    className="route-path"
  />
</svg>

        {/* Checkpoints */}
        {journey.map((item, index) => (
          <div
            key={index}
            className={`checkpoint ${item.active ? "active" : ""}`}
            style={{ left: item.left, top: item.top }}
          >
            <div className="dot"></div>

            <div className="info-card">
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
              <span>{item.year}</span>
              <h5>{item.place}</h5>
              <p>{item.description}</p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Education;