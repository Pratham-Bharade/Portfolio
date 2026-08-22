import React, { useState } from 'react';
import { ExternalLink, Github, CheckCircle2, ChevronRight, FolderGit2, Info } from 'lucide-react';

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  domain: string;
  description: string;
  technologies: string[];
  features: string[];
  architectureHighlights?: string[];
  github?: string;
  live?: string;
  iconName?: string;
}

interface ProjectCardProps {
  project: ProjectItem;
  onOpenDetails?: (project: ProjectItem) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDetails }) => {
  const { title, category, domain, description, technologies, features, github, live, iconName } = project;
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="project-card">
      {/* Top Category & Domain Row */}
      <div className="project-card-header">
        <div className="project-category-row">
          <span className="project-category-badge">
            {iconName && <span className="card-emoji">{iconName}</span>}
            <span>{category}</span>
          </span>
          <span className="project-domain-tag">{domain}</span>
        </div>
        <h3 className="project-card-title">{title}</h3>
      </div>

      <p className="project-card-desc">{description}</p>

      {/* Tech Stack Pills */}
      <div className="project-tech">
        {technologies.map((tech, index) => (
          <span key={index} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>

      {/* Key Features Section */}
      <div className="project-features-container">
        <h4 className="features-heading">Key Highlights</h4>
        <ul className="features-list">
          {features.slice(0, expanded ? features.length : 3).map((feat, idx) => (
            <li key={idx} className="feature-item">
              <CheckCircle2 size={13} className="feat-check" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>

        {features.length > 3 && (
          <button
            type="button"
            className="toggle-features-btn"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Show Less ↑" : `+${features.length - 3} More Highlights ↓`}
          </button>
        )}
      </div>

      {/* Action Buttons */}
      <div className="project-buttons">
        <button
          type="button"
          className="project-action-btn details-btn"
          onClick={() => onOpenDetails && onOpenDetails(project)}
        >
          <Info size={14} /> Quick View
        </button>

        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-action-btn github-btn"
          >
            <Github size={14} /> Code
          </a>
        )}

        {live && (
          <a
            href={live}
            className="project-action-btn live-btn"
          >
            <ExternalLink size={14} /> Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
