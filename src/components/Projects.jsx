import "./Projects.css"
import ProjectCard from "./ProjectCard"

function Projects() {

  const projectData = [
    {
      title: "Portfolio Website",
      description: "Personal portfolio built using React and modern CSS.",
      image: "/project1.png",
      github: "https://github.com/pratham-bharade/localRepo",
    },
    {
      title: "Todo App",
      description: "A task management app with local storage support.",
      image: "/project2.png",
      github: "https://github.com/pratham-bharade",
    }
  ]

  return (
    <section className="projects" id="projects">

      <h2 className="projects-title">My Projects</h2>

      <div className="projects-container">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            github={project.github}
          />
        ))}
      </div>

    </section>
  )
}

export default Projects
