import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import "./Projects.css";
import ProjectCard, { ProjectItem } from "./ProjectCard";
import {
  Sparkles,
  Search,
  SlidersHorizontal,
  X,
  CheckCircle2,
  Github,
  ExternalLink,
  Layers,
  Code2,
  Database,
  Terminal,
  Cpu
} from "lucide-react";

function Projects() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const projectData: ProjectItem[] = [
    {
      id: "tpo",
      title: "TPO CELL",
      category: "Full-Stack Web",
      domain: "Enterprise Campus Portal",
      description:
        "A centralized web platform for college placement cells with dedicated role-based portals for students and TPO coordinators, streamlining job postings, student eligibility verification, and recruitment drive schedules.",
      technologies: ["Node.js", "Express.js", "MySQL", "JavaScript", "HTML5", "CSS3", "REST APIs"],
      features: [
        "Multi-tiered Role-Based Authentication (TPO Admin & Student)",
        "Placement Drive Creation & Dynamic Application Workflows",
        "Student Profile Repository with Academic Data Tracking",
        "Normalized Relational MySQL Schema for Fast Query Execution",
        "Application Status Tracking & Recruiter Shortlisting",
      ],
      architectureHighlights: [
        "MVC (Model-View-Controller) architecture separating business logic and database queries",
        "Optimized relational database joins for rapid student eligibility filtration",
        "Session-based route guarding preventing unauthorized access to coordinator controls",
      ],
      github: "https://github.com/Pratham-Bharade",
      iconName: "🏢",
    },
    {
      id: "attendance",
      title: "Student Attendance Management",
      category: "Database & Web",
      domain: "Academic Record Platform",
      description:
        "Digital attendance tracking solution designed to replace manual paper registers, eliminate data discrepancies, and automate lecture-wise attendance calculation and defaulter list generation.",
      technologies: ["JavaScript", "HTML5", "CSS3", "SQL", "MySQL", "Relational Schema"],
      features: [
        "Subject-wise & Date-wise Classroom Attendance Logging",
        "Automated Real-Time Percentage & Defaulter Aggregation",
        "Normalized Relational Database Tables Preventing Redundancy",
        "Secure Faculty Credentials & Access Verification",
        "Instant Exportable Attendance Summaries",
      ],
      architectureHighlights: [
        "Third Normal Form (3NF) relational database structure ensuring data integrity",
        "Custom SQL aggregation queries calculating individual attendance percentages",
        "Clean, responsive front-end interface built for fast mobile/tablet logging by teachers",
      ],
      github: "https://github.com/Pratham-Bharade",
      iconName: "📊",
    },
    {
      id: "rag-ai",
      title: "AI Document Intelligence & RAG Assistant",
      category: "AI & RAG Systems",
      domain: "Document AI & Vector Search",
      description:
        "An intelligent Retrieval-Augmented Generation (RAG) assistant that allows users to upload documents and PDFs, converts them into high-dimensional vector embeddings, and enables grounded natural language Q&A with direct citation sources.",
      technologies: [
        "Python",
        "FastAPI",
        "LangChain",
        "React",
        "TypeScript",
        "FAISS / Vector DB",
        "PostgreSQL",
        "Docker",
      ],
      features: [
        "Multi-Document Upload (PDFs, docs) with automated text parsing & chunking",
        "Searchable Vector Embeddings generated via high-performance Embedding Models",
        "Semantic Similarity Search with FAISS vector index retrieval",
        "Grounded LLM Answer Generation referencing precise document sources",
        "PostgreSQL Metadata Storage with Dockerized deployment workflow",
      ],
      architectureHighlights: [
        "The user uploads documents to the application.",
        "The system converts the documents into searchable vectors and retrieves relevant information when the user asks a question.",
        "The LLM uses the retrieved information to generate an accurate, document-based answer.",
      ],
      github: "https://github.com/Pratham-Bharade",
      iconName: "🧠",
    },
    {
      id: "voice-ai",
      title: "AI Voice Bot",
      category: "Voice & Real-Time AI",
      domain: "Conversational Speech AI",
      description:
        "A real-time conversational voice assistant enabling natural bidirectional voice dialogues with an AI using speech-to-text, low-latency LLM reasoning with tool integration, and neural text-to-speech synthesis.",
      technologies: [
        "Python",
        "FastAPI",
        "Whisper",
        "Neural TTS",
        "React",
        "TypeScript",
        "WebSockets",
        "PostgreSQL",
        "Docker",
      ],
      features: [
        "Low-Latency Real-Time Voice Streaming over bidirectional WebSockets",
        "Speech-to-Text Conversion powered by Whisper / Faster-Whisper",
        "LLM Reasoning with Dynamic Tool & Function Calling capabilities",
        "High-Fidelity Neural Text-to-Speech (TTS) natural audio synthesis",
        "PostgreSQL Conversation History & Session State persistence",
      ],
      architectureHighlights: [
        "The user speaks into the microphone and the system converts their voice into text.",
        "The LLM understands the request, generates a response, and can call tools when necessary.",
        "The response is converted back into speech so the assistant can talk to the user.",
      ],
      github: "https://github.com/Pratham-Bharade",
      iconName: "🎙️",
    },
    {
      id: "portfolio",
      title: "Modern Personal Developer Portfolio",
      category: "Frontend & PWA",
      domain: "Web Engineering & PWA",
      description:
        "Interactive, performance-optimized developer portfolio built with React.js, TypeScript, and modern CSS, featuring dark/light persistence, dynamic spotlight inspectors, and mobile PWA responsiveness.",
      technologies: ["React.js", "TypeScript", "Motion", "CSS3 Variables", "PWA"],
      features: [
        "Component-Based Modular Architecture with Full Type Safety",
        "Mobile-First Responsive Layout & Fluid Touch Navigation",
        "Interactive Skills Spectrum & Academic Odyssey Stepper",
        "Persistent Theme Toggling with Custom CSS Color Tokens",
        "Sub-100ms Page Transitions & Zero External Heavy Image Dependencies",
      ],
      architectureHighlights: [
        "Strict TypeScript contracts ensuring complete type safety across all components",
        "Custom CSS design system utilizing CSS variables for frictionless theme transitions",
        "Configured for high Lighthouse performance metrics across mobile and desktop devices",
      ],
      github: "https://github.com/Pratham-Bharade",
      live: "#home",
      iconName: "💻",
    },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "Full-Stack Web", label: "Full-Stack Web" },
    { id: "Database & Web", label: "Database Portals" },
    { id: "AI & RAG Systems", label: "AI & RAG" },
    { id: "Voice & Real-Time AI", label: "Voice AI" },
    { id: "Frontend & PWA", label: "Frontend & PWA" },
  ];

  const filteredProjects = useMemo(() => {
    return projectData.filter((p) => {
      const matchesCategory =
        selectedFilter === "all" || p.category === selectedFilter;
      const matchesSearch =
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedFilter, searchQuery]);

  return (
    <section className="projects" id="projects">
      <div className="projects-wrapper">
        {/* Header */}
        <div className="projects-header">
          <div className="projects-badge-tag">
            <Sparkles size={13} className="sparkle-icon" />
            <span>FEATURED WORK & CASE STUDIES</span>
          </div>
          <h2 className="projects-title shiny-text">Featured Projects</h2>
          <p className="projects-subtitle">
            A versatile showcase of full-stack web applications, Java enterprise systems, and relational database platforms built with clean software engineering practices.
          </p>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="projects-toolbar">
          {/* Quick Search */}
          <div className="projects-search-box">
            <Search size={16} className="search-icon" />
            <input
              type="text"
              placeholder="Search by project name or tech (e.g. Java, MySQL, React, Node)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="projects-search-input"
            />
            {searchQuery && (
              <button
                className="search-clear-btn"
                onClick={() => setSearchQuery("")}
              >
                ✕
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="projects-filter-bar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`project-filter-btn ${selectedFilter === cat.id ? "active" : ""}`}
                onClick={() => setSelectedFilter(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-container">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={(proj) => setActiveModalProject(proj)}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="no-projects-found">
            <p>No projects found matching "{searchQuery}"</p>
            <button
              className="reset-filter-btn"
              onClick={() => {
                setSearchQuery("");
                setSelectedFilter("all");
              }}
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Quick View Modal */}
        <AnimatePresence>
          {activeModalProject && (
            <div className="project-modal-backdrop" onClick={() => setActiveModalProject(null)}>
              <motion.div
                className="project-modal-content"
                onClick={(e) => e.stopPropagation()}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.25 }}
              >
                {/* Modal Header */}
                <div className="modal-header">
                  <div className="modal-title-group">
                    <span className="modal-category-badge">
                      {activeModalProject.iconName} {activeModalProject.category}
                    </span>
                    <h3 className="modal-project-title">{activeModalProject.title}</h3>
                    <span className="modal-domain">{activeModalProject.domain}</span>
                  </div>
                  <button
                    className="modal-close-btn"
                    onClick={() => setActiveModalProject(null)}
                    title="Close"
                  >
                    <X size={20} />
                  </button>
                </div>

                <p className="modal-desc">{activeModalProject.description}</p>

                {/* Tech Stack */}
                <div className="modal-section">
                  <h4 className="modal-section-title">Technologies & Stacks</h4>
                  <div className="modal-tech-pills">
                    {activeModalProject.technologies.map((t, idx) => (
                      <span key={idx} className="modal-tech-pill">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="modal-section">
                  <h4 className="modal-section-title">Key Capabilities & Features</h4>
                  <ul className="modal-feature-list">
                    {activeModalProject.features.map((f, idx) => (
                      <li key={idx}>
                        <CheckCircle2 size={15} className="modal-check" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Architecture Highlights */}
                {activeModalProject.architectureHighlights && (
                  <div className="modal-section highlight-sec">
                    <h4 className="modal-section-title gold">Engineering & Architecture Highlights</h4>
                    <ul className="modal-feature-list">
                      {activeModalProject.architectureHighlights.map((a, idx) => (
                        <li key={idx}>
                          <CheckCircle2 size={15} className="modal-check gold" />
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Modal Footer Links */}
                <div className="modal-footer">
                  <a
                    href={activeModalProject.github || "https://github.com/Pratham-Bharade"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-action-btn github"
                  >
                    <Github size={16} />
                    <span>View GitHub Repository</span>
                  </a>

                  {activeModalProject.live && (
                    <a
                      href={activeModalProject.live}
                      className="modal-action-btn live"
                      onClick={() => setActiveModalProject(null)}
                    >
                      <ExternalLink size={16} />
                      <span>Live Preview</span>
                    </a>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Projects;
