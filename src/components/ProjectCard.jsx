function ProjectCard({ title, description, image, github, live }) {
  return (
    <div className="project-card">

      {/* <img src={image} alt={title} className="project-image" /> */}

      <h3>{title}</h3>
      <p>{description}</p>

      <div className="project-buttons">

        <a href={live} target="_blank">
          {/* <button>Live</button> */}
        </a>

        <a href={github} target="_blank" rel="noreferrer">
          <button >GitHub</button>
            {/* <button style={{ color: "black"}}>GitHub</button> */}
        </a>

      </div>

    </div>
  )
}

export default ProjectCard
