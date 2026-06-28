import "./Projects.css";
import ProjectCard from "./ProjectCard";

function Projects() {
  const projectData = [
   
    {
  title: "Attendance Management Module",
  description: "Developed a web-based attendance management system to digitalize the traditional attendance process, reducing manual errors and simplifying attendance tracking based on lectures and subjects. The system provides an organized and efficient way to manage student attendance records.",

  technologies: ["HTML", "CSS", "JavaScript", "SQL"],

  Key_Features: (
    <h5>
      Key Features
      <br></br><br></br>
     •   Lecture-wise Attendance
      <br></br>
     •   Subject-wise Records
      <br></br>
     •   Secure User Authentication
      <br></br>
     • SQL Database Integration
      <br></br>
     • Reduced Manual Errors
    </h5>
  ),

  // github: "https://github.com/pratham-bharade",
  // live: "https://your-live-demo.com",
},



  {
  title: "Training & Placement Cell ",

  description:
    "Developed a web-based Training & Placement Cell Management System to streamline campus placement activities. The system provides separate login portals for TPO officers and students, enabling efficient management of student profiles, placement drives, and recruitment-related information through a centralized platform.",

  technologies: [
    "Node.js",
    "Express.js",
    "JavaScript",
    "HTML",
    "CSS",
    "MySQL"
  ],

  Key_Features: (
    <h5>
      Key Features
      <br></br><br></br>
      • Role-Based Authentication
      <br></br>
      • Student Profile Management
      <br></br>
      • Placement Drive Management
      <br></br>
      • Centralized Data Management
      <br></br>
      • Real-Time Job Updates
    </h5>
  ),

  // github: "https://github.com/pratham-bharade",
  // live: "https://your-live-demo.com",
},
    


    {
      title: "Portfolio Website",
description:
  "Developed a responsive personal portfolio website to showcase my skills, projects, certifications, and achievements. Designed with a component-based architecture, smooth navigation, dark mode support, and a mobile-first approach to ensure an optimal user experience across devices.",
technologies: ["JavaScript","HTML5","Tailwind CSS","Git & GitHub"],
 Key_Features : <h5>Key Features<br></br><br></br>• Responsive Mobile-First Design<br></br>• Built-in Dark Mode Support<br></br>• Reusable UI Component Architecture<br></br>• Project Skills Showcase Sections</h5>,
    }
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
            Key_Features={project.Key_Features}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
