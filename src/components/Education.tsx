import "./Education.css";

function Education() {
  const journey = [
    {
      title: "10th",
      year: "MARCH-2019",
      place: "Shree Nageshwer Secondary School",
      description: "Completed secondary education with strong academic foundation.",
      image: "https://cdn-icons-png.flaticon.com/512/167/167707.png",
      left: "9%",
      top: "80px",
    },
    {
      title: "12th",
      year: "MARCH-2022",
      place: "Dnyanbhaki Junior College, Alandi",
      description: "Focused on science stream and core fundamentals.",
      image: "https://cdn-icons-png.flaticon.com/512/2231/2231649.png",
      left: "35%",
      top: "13px",
    },
    {
      title: "Bachelor's Degree",
      year: "2025",
      place: "MES Abasaheb Garware college, Pune",
      description: "Completed graduation in Computer Science from Savitribai Phule Pune University.",
      image: "https://cdn-icons-png.flaticon.com/512/2997/2997300.png",
      left: "64%",
      top: "16px",
    },
    {
      title: "MSc (Current)",
      year: "2026 - Present",
      place: "Savitribai Phule Pune University",
      description: "Currently pursuing MSc in Computer Applications.",
      image: "https://cdn-icons-png.flaticon.com/512/3135/3135810.png",
      left: "91%",
      top: "3px",
      active: true,
    },
  ];

  return (
    <section className="education" id="education">
      <h2 className="education-title shiny-text">My Learning Journey</h2>

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
            style={{ left: item.left, top: item.top } as any}
          >
            <div className="dot"></div>

            <div className="info-card">
              <img src={item.image} alt={item.title} referrerPolicy="no-referrer" />
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
