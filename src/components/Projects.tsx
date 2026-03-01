import "./Projects.css";
import ProjectCard from "./ProjectCard";

function Projects() {
  const projectData = [
    {
      title: "Portfolio Website",
      description: "A high-performance, responsive personal portfolio designed to showcase creative work and technical skills. Features smooth animations, dark mode support, and a mobile-first design approach.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/pratham-bharade/localRepo",
      live: "https://ais-pre-2iryawym6ut3q2nw2kleyk-379101296463.asia-southeast1.run.app",
    },
    {
      title: "Task Management System",
      description: "A comprehensive productivity tool for managing daily tasks and long-term projects. Includes features like task categorization, priority levels, and persistent data storage using local storage.",
      technologies: ["React", "JavaScript", "CSS3", "Local Storage"],
      github: "https://github.com/pratham-bharade",
      live: "https://github.com/pratham-bharade",
    },
    {
      title: "E-commerce Dashboard",
      description: "A modern administrative dashboard for managing online store operations. Provides real-time data visualization, inventory tracking, and customer order management with a clean, intuitive interface.",
      technologies: ["React", "D3.js", "Express", "Node.js"],
      github: "https://github.com/pratham-bharade",
      live: "https://github.com/pratham-bharade",
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2 className="projects-title shiny-text">My Projects</h2>

      <div className="projects-container">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            github={project.github}
            live={project.live}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
