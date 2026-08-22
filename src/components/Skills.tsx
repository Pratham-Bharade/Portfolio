import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Code2,
  Terminal,
  Globe,
  Server,
  Database,
  Wrench,
  Search,
  Sparkles,
  CheckCircle2,
  Zap,
  Layers,
  BarChart3,
  LayoutGrid,
  Cpu,
  ArrowUpRight,
  SlidersHorizontal,
  Lightbulb
} from "lucide-react";
import "./Skills.css";

interface SkillItem {
  id: string;
  name: string;
  category: "languages" | "frontend" | "backend" | "database" | "tools";
  categoryLabel: string;
  proficiency: number; // 0 - 100
  level: "Advanced" | "Proficient" | "Intermediate";
  iconName: string;
  description: string;
  highlights: string[];
  appliedIn: string;
}

const skillsCatalog: SkillItem[] = [
  // Programming Languages
  {
    id: "java",
    name: "Java",
    category: "languages",
    categoryLabel: "Core Programming",
    proficiency: 75,
    level: "Proficient",
    iconName: "☕",
    description: "Strong foundation in Object-Oriented Architecture, Collections framework, Exception Handling, and multithreading.",
    highlights: ["OOP Principles & Polymorphism", "Collections & Generics", "File I/O & Exception Hierarchy", "JDBC Database Connectivity"],
    appliedIn: "Banking System & MCA Enterprise Labs",
  },
  {
    id: "python",
    name: "Python",
    category: "languages",
    categoryLabel: "Core Programming",
    proficiency: 64,
    level: "Intermediate",
    iconName: "🐍",
    description: "FastAPI backends, vector embeddings, LangChain integration, and automated AI processing pipelines.",
    highlights: ["FastAPI & REST Services", "LangChain & Vector Search", "Automation & Text Processing", "Data Structures & Logic"],
    appliedIn: "AI Document RAG & AI Voice Bot",
  },
  {
    id: "cpp",
    name: "C / C++",
    category: "languages",
    categoryLabel: "Core Programming",
    proficiency: 71,
    level: "Proficient",
    iconName: "⚡",
    description: "Deep procedural and object-oriented programming foundation, memory management, pointers, and performance fundamentals.",
    highlights: ["Pointers & Memory Allocation", "Data Structures Implementation", "Object-Oriented Design in C++"],
    appliedIn: "B.Sc Computer Science Foundation",
  },
  {
    id: "sql",
    name: "SQL",
    category: "languages",
    categoryLabel: "Core Programming",
    proficiency: 74,
    level: "Proficient",
    iconName: "🗄️",
    description: "Relational database querying, multi-table joins, subqueries, aggregation, and index optimization.",
    highlights: ["Complex Queries & Joins", "Aggregations & Grouping", "Schema DDL/DML", "Constraints & Triggers"],
    appliedIn: "TPO CELL & Student Attendance Management",
  },
  {
    id: "javascript",
    name: "JavaScript (ES6+)",
    category: "languages",
    categoryLabel: "Core Programming",
    proficiency: 65,
    level: "Intermediate",
    iconName: "🟨",
    description: "Modern asynchronous JavaScript, closures, promises, async/await, array transformations, and event loops.",
    highlights: ["ES6+ Syntax & Destructuring", "Async/Await & Fetch API", "DOM & Event Handling"],
    appliedIn: "Full-Stack Web Applications & Portfolio",
  },

  // Frontend
  {
    id: "react",
    name: "React.js",
    category: "frontend",
    categoryLabel: "Frontend & UI",
    proficiency: 72,
    level: "Proficient",
    iconName: "⚛️",
    description: "Component-based UI architecture, custom hooks, state management, and modern component lifecycles.",
    highlights: ["Functional Components & Hooks", "State & Props Flow", "Motion & Interactive Animations", "Responsive Layouts"],
    appliedIn: "Personal Developer Portfolio & Web Apps",
  },
  {
    id: "html5",
    name: "HTML5",
    category: "frontend",
    categoryLabel: "Frontend & UI",
    proficiency: 75,
    level: "Proficient",
    iconName: "🌐",
    description: "Semantic web architecture, accessible forms, meta tags, and structured document standards.",
    highlights: ["Semantic Tagging", "SEO & Meta Best Practices", "Form Validation & Accessibility"],
    appliedIn: "All Web Projects & Portals",
  },
  {
    id: "css3",
    name: "CSS3 / Modern CSS",
    category: "frontend",
    categoryLabel: "Frontend & UI",
    proficiency: 73,
    level: "Proficient",
    iconName: "🎨",
    description: "Advanced styling, CSS variables, Flexbox, CSS Grid layouts, keyframe animations, and dark/light theming.",
    highlights: ["CSS Variables & Theming", "Flexbox & CSS Grid Mastery", "Fluid Responsive Viewports", "Keyframe Animations"],
    appliedIn: "Portfolio UI & Enterprise Portals",
  },

  // Backend
  {
    id: "nodejs",
    name: "Node.js",
    category: "backend",
    categoryLabel: "Backend & Systems",
    proficiency: 60,
    level: "Intermediate",
    iconName: "🟢",
    description: "Server-side JavaScript runtime for building event-driven backend services and API backends.",
    highlights: ["Asynchronous Event Loop", "NPM Package Ecosystem", "File Stream Operations"],
    appliedIn: "TPO CELL Platform",
  },
  {
    id: "express",
    name: "Express.js",
    category: "backend",
    categoryLabel: "Backend & Systems",
    proficiency: 62,
    level: "Intermediate",
    iconName: "🚂",
    description: "Fast, unopinionated minimalist web framework for designing REST APIs and middleware pipelines.",
    highlights: ["RESTful Routing & Endpoints", "Middleware Architecture", "Error Handling Mechanisms"],
    appliedIn: "TPO CELL Platform",
  },
  {
    id: "restapi",
    name: "RESTful APIs",
    category: "backend",
    categoryLabel: "Backend & Systems",
    proficiency: 68,
    level: "Proficient",
    iconName: "🔌",
    description: "Designing structured JSON API endpoints adhering to standard HTTP methods, status codes, and security rules.",
    highlights: ["HTTP Methods (GET, POST, PUT, DELETE)", "JSON Payload Structure", "Status Codes & Error Messaging"],
    appliedIn: "All Full-Stack Architecture",
  },
  {
    id: "auth",
    name: "Role-Based Auth",
    category: "backend",
    categoryLabel: "Backend & Systems",
    proficiency: 61,
    level: "Intermediate",
    iconName: "🔒",
    description: "Multi-tiered user access control, session management, credential hashing, and secure route guards.",
    highlights: ["TPO & Student Access Control", "Credential Security", "Protected Routes"],
    appliedIn: "TPO CELL Platform",
  },

  // Database
  {
    id: "mysql",
    name: "MySQL",
    category: "database",
    categoryLabel: "Databases & Storage",
    proficiency: 74,
    level: "Proficient",
    iconName: "🐬",
    description: "Relational database server management, schema modeling, relational integrity, and indexing.",
    highlights: ["Primary & Foreign Key Integrity", "Index Optimization", "Stored Procedures Basics", "Multi-table Relational Schemas"],
    appliedIn: "Attendance System & TPO Portal",
  },
  {
    id: "dbschema",
    name: "Database Normalization",
    category: "database",
    categoryLabel: "Databases & Storage",
    proficiency: 67,
    level: "Proficient",
    iconName: "📐",
    description: "Designing 1NF, 2NF, 3NF normalized tables to prevent data redundancy and ensure transactional consistency.",
    highlights: ["1NF, 2NF, 3NF Normalization", "Entity Relationship (ER) Modeling", "Data Consistency Rules"],
    appliedIn: "Academic & Enterprise Database Design",
  },

  // Tools
  {
    id: "git",
    name: "Git & GitHub",
    category: "tools",
    categoryLabel: "Tools & Workflow",
    proficiency: 74,
    level: "Proficient",
    iconName: "🐙",
    description: "Distributed version control, branch management, merge conflict resolution, pull requests, and commit workflows.",
    highlights: ["Branching & Merging", "Commit History & Reverts", "Remote Repositories & Collaboration"],
    appliedIn: "All Code Repositories & Team Projects",
  },
  {
    id: "vscode",
    name: "VS Code",
    category: "tools",
    categoryLabel: "Tools & Workflow",
    proficiency: 75,
    level: "Proficient",
    iconName: "💻",
    description: "Optimized developer workflow with debugging, extensions, snippets, and integrated terminal management.",
    highlights: ["Integrated Debugging", "Extension Ecosystem", "Productivity Shortcuts"],
    appliedIn: "Daily Development Environment",
  },
  {
    id: "postman",
    name: "Postman",
    category: "tools",
    categoryLabel: "Tools & Workflow",
    proficiency: 63,
    level: "Intermediate",
    iconName: "🚀",
    description: "API testing, request header configuration, environment variables, and endpoint verification.",
    highlights: ["API Endpoint Testing", "Payload & Header Verification", "Response Status Validation"],
    appliedIn: "Backend API Verification",
  },
];

function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [viewMode, setViewMode] = useState<"matrix" | "spectrum">("matrix");
  const [spotlightSkill, setSpotlightSkill] = useState<SkillItem>(skillsCatalog[0]); // Default Java

  const categoryFilters = [
    { id: "all", label: "All Stacks", icon: <SlidersHorizontal size={14} /> },
    { id: "languages", label: "Languages", icon: <Terminal size={14} /> },
    { id: "frontend", label: "Frontend", icon: <Globe size={14} /> },
    { id: "backend", label: "Backend & APIs", icon: <Server size={14} /> },
    { id: "database", label: "Databases", icon: <Database size={14} /> },
    { id: "tools", label: "Tools", icon: <Wrench size={14} /> },
  ];

  const filteredSkills = useMemo(() => {
    return skillsCatalog.filter((item) => {
      const matchesCategory =
        selectedCategory === "all" || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section className="skills" id="skills">
      <div className="skills-wrapper">
        {/* Header */}
        <div className="skills-header">
          <div className="skills-badge-tag">
            <Sparkles size={13} className="sparkle-icon" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="skills-title shiny-text">Skills Spectrum & Tech Stack</h2>
          <p className="skills-subtitle">
            An interactive showcase of programming languages, frameworks, backend architectures, and developer tooling in my software engineering stack.
          </p>
        </div>

        {/* Controls Toolbar: Search, Filters, View Modes */}
        <div className="skills-toolbar">
          {/* Search Box */}
          <div className="skills-search-box">
            <Search size={16} className="search-icon" />
            <input
              type="text"
              placeholder="Search skill (e.g. Java, React, SQL, Git)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="skills-search-input"
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

          {/* View Mode Switcher */}
          <div className="view-mode-toggle">
            <button
              className={`mode-btn ${viewMode === "matrix" ? "active" : ""}`}
              onClick={() => setViewMode("matrix")}
              title="Interactive Matrix View"
            >
              <LayoutGrid size={15} />
              <span>Matrix View</span>
            </button>
            <button
              className={`mode-btn ${viewMode === "spectrum" ? "active" : ""}`}
              onClick={() => setViewMode("spectrum")}
              title="Proficiency Spectrum View"
            >
              <BarChart3 size={15} />
              <span>Spectrum</span>
            </button>
          </div>
        </div>

        {/* Category Pills */}
        <div className="skills-category-pills">
          {categoryFilters.map((cat) => (
            <button
              key={cat.id}
              className={`cat-pill ${selectedCategory === cat.id ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.icon}
              <span>{cat.label}</span>
              {cat.id === "all" ? (
                <span className="pill-count">{skillsCatalog.length}</span>
              ) : (
                <span className="pill-count">
                  {skillsCatalog.filter((s) => s.category === cat.id).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* MAIN INTERACTIVE SECTION */}
        {viewMode === "matrix" ? (
          <div className="skills-interactive-layout">
            {/* LEFT: Grid of Interactive Skill Badges */}
            <div className="skills-badge-collection">
              <div className="collection-header">
                <span className="collection-hint">
                  <Lightbulb size={14} className="hint-icon" />
                  <span>Click or hover any technology to inspect details</span>
                </span>
                <span className="results-count">
                  Showing {filteredSkills.length} Technologies
                </span>
              </div>

              <div className="skills-badge-grid">
                {filteredSkills.map((skill) => {
                  const isSelected = spotlightSkill.id === skill.id;
                  return (
                    <motion.div
                      key={skill.id}
                      className={`skill-interactive-node ${isSelected ? "selected" : ""}`}
                      onClick={() => setSpotlightSkill(skill)}
                      onMouseEnter={() => setSpotlightSkill(skill)}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <div className="node-icon-emoji">{skill.iconName}</div>
                      <div className="node-info">
                        <span className="node-name">{skill.name}</span>
                        <span className="node-cat">{skill.categoryLabel}</span>
                      </div>
                      <div className="node-level-tag">{skill.level}</div>
                    </motion.div>
                  );
                })}
              </div>

              {filteredSkills.length === 0 && (
                <div className="no-skills-found">
                  <p>No technologies matched "{searchQuery}"</p>
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("all");
                    }}
                    className="reset-search-btn"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>

            {/* RIGHT: Live Spotlight Inspector Card */}
            <div className="skills-spotlight-col">
              <AnimatePresence mode="wait">
                <motion.div
                  key={spotlightSkill.id}
                  className="spotlight-card"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="spotlight-badge-row">
                    <span className="spotlight-tag">{spotlightSkill.categoryLabel}</span>
                    <span className="spotlight-level-pill">{spotlightSkill.level}</span>
                  </div>

                  <div className="spotlight-hero-row">
                    <div className="spotlight-large-icon">{spotlightSkill.iconName}</div>
                    <div>
                      <h3 className="spotlight-title">{spotlightSkill.name}</h3>
                      <span className="spotlight-applied-label">
                        Applied in: <strong>{spotlightSkill.appliedIn}</strong>
                      </span>
                    </div>
                  </div>

                  {/* Proficiency Meter */}
                  <div className="spotlight-meter-block">
                    <div className="meter-label-row">
                      <span className="meter-label">Proficiency Level</span>
                      <span className="meter-val">{spotlightSkill.proficiency}%</span>
                    </div>
                    <div className="meter-track">
                      <motion.div
                        className="meter-fill"
                        initial={{ width: 0 }}
                        animate={{ width: `${spotlightSkill.proficiency}%` }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      />
                    </div>
                  </div>

                  <p className="spotlight-desc">{spotlightSkill.description}</p>

                  <div className="spotlight-highlights-block">
                    <h4 className="highlights-title">Key Core Competencies</h4>
                    <ul className="spotlight-highlights-list">
                      {spotlightSkill.highlights.map((h, i) => (
                        <li key={i}>
                          <CheckCircle2 size={14} className="highlight-check" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="spotlight-footer">
                    <a href="#projects" className="spotlight-action-link">
                      <span>View Related Projects</span>
                      <ArrowUpRight size={15} />
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        ) : (
          /* PROFICIENCY SPECTRUM VIEW */
          <div className="skills-spectrum-layout">
            <div className="spectrum-grid">
              {filteredSkills.map((skill) => (
                <div key={skill.id} className="spectrum-card">
                  <div className="spectrum-top">
                    <div className="spectrum-icon-name">
                      <span className="spectrum-emoji">{skill.iconName}</span>
                      <div>
                        <h4 className="spectrum-skill-name">{skill.name}</h4>
                        <span className="spectrum-cat">{skill.categoryLabel}</span>
                      </div>
                    </div>
                    <span className="spectrum-percentage">{skill.proficiency}%</span>
                  </div>

                  <div className="spectrum-bar-track">
                    <div
                      className="spectrum-bar-fill"
                      style={{ width: `${skill.proficiency}%` }}
                    />
                  </div>

                  <div className="spectrum-chips-row">
                    {skill.highlights.slice(0, 2).map((h, i) => (
                      <span key={i} className="spectrum-mini-chip">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Skills;
