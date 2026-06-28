import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  
  github: string;
  live?: string;
  Key_Features : String;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, technologies, github, live ,Key_Features }) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      
      <div className="project-tech">
        {technologies.map((tech, index) => (
          <span key={index} className="tech-tag">{tech}</span>
        ))}
      </div>
      

{/* heeeeeeeeeee coment kelay nanter links takun acktivate krrrrrrrrrrrrrrrrr*/}
{/*########################################################################*/}
{/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/}
      {/* <div className="project-buttons">
        {live && (
          <a href={live} target="_blank" rel="noreferrer">
            <button>Live</button>
          </a>
        )}

        <a href={github} target="_blank" rel="noreferrer">
          <button>GitHub</button>
        </a>
      </div> */}
      
{/*########################################################################*/}
{/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/}

<h2>{Key_Features}</h2>
    </div>
  );
}

export default ProjectCard;
