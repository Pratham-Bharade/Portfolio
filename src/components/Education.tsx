import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  GraduationCap,
  School,
  BookOpenCheck,
  Award,
  Calendar,
  MapPin,
  Sparkles,
  CheckCircle2,
  BookOpen,
  Layers,
  ArrowRight,
  Milestone,
  LayoutList,
  Compass,
  Building2,
  Code2
} from "lucide-react";
import "./Education.css";

interface EducationMilestone {
  id: string;
  degree: string;
  shortTitle: string;
  institution: string;
  universityOrBoard: string;
  location: string;
  period: string;
  status: "In Progress" | "Completed";
  statusColor?: string;
  iconName: string;
  icon: any;
  overview: string;
  coreCoursework: string[];
  keyAchievements: string[];
  practicalModules: string[];
}

const educationData: EducationMilestone[] = [
  {
    id: "mca",
    degree: "Master of Computer Applications (MCA)",
    shortTitle: "MCA Post-Graduation",
    institution: "Savitribai Phule Pune University (SPPU)",
    universityOrBoard: "SPPU Department of Computer Applications",
    location: "Pune, Maharashtra, India",
    period: "2025 - Present",
    status: "In Progress",
    iconName: "🎓",
    icon: GraduationCap,
    overview:
      "Advanced post-graduate curriculum specializing in Enterprise Java architecture, relational database systems, distributed web services, and scalable software design.",
    coreCoursework: [
      "Enterprise Java & Python Systems",
      "Relational Database Management (RDBMS)",
      "Distributed Web Architecture & REST APIs",
      "Artificial Intelligence & RAG Fundamentals",
      "Data Structures & Algorithmic Problem Solving",
    ],
    keyAchievements: [
      "Specialized in Java, Python, and Full-Stack Engineering",
      "Architected Campus Portals & Conversational AI Systems",
      "Active participant in technical seminars & coding challenges",
    ],
    practicalModules: [
      "TPO CELL - Campus Management Portal",
      "AI Document Intelligence & RAG Assistant",
      "Real-Time Conversational AI Voice Bot",
    ],
  },
  {
    id: "bsc",
    degree: "Bachelor of Science in Computer Science (B.Sc CS)",
    shortTitle: "B.Sc Computer Science",
    institution: "MES Abasaheb Garware College, Pune",
    universityOrBoard: "Savitribai Phule Pune University (SPPU)",
    location: "Pune, Maharashtra, India",
    period: "2022 - 2025",
    status: "Completed",
    iconName: "🏆",
    icon: Award,
    overview:
      "Graduated with a comprehensive computer science foundation spanning procedural & object-oriented programming, systems architecture, operating systems, and database engineering.",
    coreCoursework: [
      "C & C++ Programming Languages",
      "Data Structures & Abstract Data Types",
      "Relational SQL & Database Foundations",
      "Operating Systems & System Architecture",
      "Web Technologies (HTML5, CSS3, JavaScript)",
    ],
    keyAchievements: [
      "Graduated with high distinction in core CS subjects",
      "Developed Attendance Management System as academic project",
      "Strong foundation in algorithmic logic and memory management",
    ],
    practicalModules: [
      "Digital Attendance Management Module (SQL + Web)",
      "C++ Data Structure Implementations (Trees, Graphs, Lists)",
      "Database Query Optimization Labs",
    ],
  },
  {
    id: "hsc",
    degree: "Higher Secondary Certificate (12th Science)",
    shortTitle: "12th HSC (Science)",
    institution: "Dnyanbhakti Junior College, Alandi",
    universityOrBoard: "Maharashtra State Board (MSBSHSE)",
    location: "Pune, Maharashtra, India",
    period: "2020 - 2022",
    status: "Completed",
    iconName: "🔬",
    icon: BookOpenCheck,
    overview:
      "Completed higher secondary education in the Science stream with deep analytical grounding in Physics, Chemistry, and Advanced Higher Mathematics.",
    coreCoursework: [
      "Advanced Mathematics & Calculus",
      "Physics & Mechanics",
      "Chemistry & Analytical Science",
      "Computer Science Fundamentals",
    ],
    keyAchievements: [
      "Built strong mathematical and analytical problem-solving skills",
      "Developed early interest in computing and programming logic",
    ],
    practicalModules: [
      "Mathematics Analysis & Applied Calculus",
      "Introductory Logic & Computer Fundamentals",
    ],
  },
  {
    id: "ssc",
    degree: "Secondary School Certificate (10th SSC)",
    shortTitle: "10th SSC",
    institution: "Shree Nageshwar Secondary School",
    universityOrBoard: "Maharashtra State Board (MSBSHSE)",
    location: "Pune, Maharashtra, India",
    period: "2018 - 2019",
    status: "Completed",
    iconName: "🏫",
    icon: School,
    overview:
      "Completed secondary education with solid academic distinction, focusing on core sciences, mathematics, and foundational humanities.",
    coreCoursework: [
      "Mathematics & Geometry",
      "General Sciences",
      "Social Sciences & English",
    ],
    keyAchievements: [
      "Achieved strong academic performance in Mathematics and Science",
      "Active participant in school competitions and group initiatives",
    ],
    practicalModules: [
      "Science Projects & Geometry Practical Labs",
    ],
  },
];

function Education() {
  const [activeMilestoneId, setActiveMilestoneId] = useState<string>("mca");
  const [viewMode, setViewMode] = useState<"interactive" | "timeline">("interactive");

  const currentMilestone =
    educationData.find((item) => item.id === activeMilestoneId) || educationData[0];

  return (
    <section className="education" id="education">
      <div className="education-wrapper">
        {/* Header */}
        <div className="education-header">
          <div className="education-badge-tag">
            <Sparkles size={13} className="sparkle-icon" />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="education-title shiny-text">Educational Journey & Milestones</h2>
          <p className="education-subtitle">
            An interactive roadmap of my formal qualifications, computer science degrees, and academic specializations.
          </p>
        </div>

        {/* View Mode Toggle */}
        <div className="education-view-toggle">
          <button
            className={`edu-mode-btn ${viewMode === "interactive" ? "active" : ""}`}
            onClick={() => setViewMode("interactive")}
          >
            <Compass size={15} />
            <span>Interactive Roadmap</span>
          </button>
          <button
            className={`edu-mode-btn ${viewMode === "timeline" ? "active" : ""}`}
            onClick={() => setViewMode("timeline")}
          >
            <LayoutList size={15} />
            <span>Full Timeline View</span>
          </button>
        </div>

        {viewMode === "interactive" ? (
          /* INTERACTIVE ROADMAP VIEW */
          <div className="education-interactive-container">
            {/* Step Navigation Track */}
            <div className="milestones-nav-track">
              {educationData.map((item, index) => {
                const isActive = activeMilestoneId === item.id;
                const IconComponent = item.icon;

                return (
                  <div
                    key={item.id}
                    className={`milestone-nav-item ${isActive ? "active" : ""}`}
                    onClick={() => setActiveMilestoneId(item.id)}
                  >
                    <div className="milestone-nav-marker">
                      <span className="milestone-emoji">{item.iconName}</span>
                      {isActive && <span className="nav-pulse-ring"></span>}
                    </div>

                    <div className="milestone-nav-text">
                      <span className="milestone-period">{item.period}</span>
                      <h4 className="milestone-short-title">{item.shortTitle}</h4>
                      <span className="milestone-status-tag">
                        {item.status === "In Progress" ? "⚡ Current" : "✓ Completed"}
                      </span>
                    </div>

                    {index < educationData.length - 1 && (
                      <div className="milestone-connector-line"></div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Active Milestone Spotlight Detail Card */}
            <div className="milestone-spotlight-wrapper">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentMilestone.id}
                  className="milestone-spotlight-card"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                >
                  {/* Card Header */}
                  <div className="spotlight-top-header">
                    <div className="spotlight-badge-row">
                      <span className="institution-badge">
                        <Building2 size={13} /> {currentMilestone.universityOrBoard}
                      </span>
                      <span
                        className={`status-pill ${
                          currentMilestone.status === "In Progress" ? "in-progress" : "completed"
                        }`}
                      >
                        {currentMilestone.status === "In Progress" ? "⚡ Current Focus" : "✓ Completed"}
                      </span>
                    </div>

                    <div className="spotlight-title-row">
                      <div className="spotlight-icon-circle">
                        <span className="spotlight-big-emoji">{currentMilestone.iconName}</span>
                      </div>
                      <div>
                        <h3 className="spotlight-degree-title">{currentMilestone.degree}</h3>
                        <div className="spotlight-meta-info">
                          <span className="meta-inst">{currentMilestone.institution}</span>
                          <span className="meta-sep">•</span>
                          <span className="meta-loc">
                            <MapPin size={12} /> {currentMilestone.location}
                          </span>
                          <span className="meta-sep">•</span>
                          <span className="meta-date">
                            <Calendar size={12} /> {currentMilestone.period}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Overview */}
                  <p className="spotlight-overview-text">{currentMilestone.overview}</p>

                  {/* 3 Columns of Details */}
                  <div className="spotlight-details-grid">
                    {/* Core Coursework */}
                    <div className="detail-panel">
                      <div className="panel-title-row">
                        <BookOpen size={16} className="panel-icon" />
                        <h4>Core Subjects & Coursework</h4>
                      </div>
                      <ul className="panel-list">
                        {currentMilestone.coreCoursework.map((sub, i) => (
                          <li key={i}>
                            <CheckCircle2 size={13} className="panel-check" />
                            <span>{sub}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Key Highlights */}
                    <div className="detail-panel">
                      <div className="panel-title-row">
                        <Award size={16} className="panel-icon" />
                        <h4>Key Highlights</h4>
                      </div>
                      <ul className="panel-list">
                        {currentMilestone.keyAchievements.map((ach, i) => (
                          <li key={i}>
                            <CheckCircle2 size={13} className="panel-check" />
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Practical & Applied Labs */}
                    <div className="detail-panel highlight-panel">
                      <div className="panel-title-row">
                        <Code2 size={16} className="panel-icon gold" />
                        <h4>Applied Engineering Modules</h4>
                      </div>
                      <ul className="panel-list">
                        {currentMilestone.practicalModules.map((mod, i) => (
                          <li key={i}>
                            <CheckCircle2 size={13} className="panel-check gold" />
                            <span>{mod}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Spotlight Footer */}
                  <div className="spotlight-card-footer">
                    <div className="footer-degree-note">
                      <span>Affiliated with Savitribai Phule Pune University (SPPU)</span>
                    </div>
                    <a href="#skills" className="spotlight-nav-link">
                      <span>View Technical Skills</span>
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        ) : (
          /* FULL TIMELINE VIEW */
          <div className="education-timeline-grid">
            {educationData.map((item) => (
              <div key={item.id} className="timeline-full-card">
                <div className="full-card-header">
                  <div className="full-card-icon-emoji">{item.iconName}</div>
                  <div className="full-card-header-info">
                    <span className="full-card-period">
                      <Calendar size={12} /> {item.period}
                    </span>
                    <h3 className="full-card-title">{item.degree}</h3>
                    <h5 className="full-card-institution">{item.institution}</h5>
                  </div>
                  <span
                    className={`status-pill ${
                      item.status === "In Progress" ? "in-progress" : "completed"
                    }`}
                  >
                    {item.status === "In Progress" ? "⚡ Current" : "✓ Completed"}
                  </span>
                </div>

                <p className="full-card-desc">{item.overview}</p>

                <div className="full-card-chips">
                  {item.coreCoursework.map((chip, i) => (
                    <span key={i} className="coursework-chip">
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Education;
