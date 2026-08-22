import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Code2,
  BookOpen,
  Sparkles,
  Layers,
  Zap,
  Target,
  Users2,
  CheckCircle2,
  Flame,
  Database,
  Cpu,
  ArrowRight,
  ShieldCheck,
  Award
} from "lucide-react";
import "./About.css";

function About() {
  const [activeTab, setActiveTab] = useState<"dev" | "scholar" | "dna">("dev");

  const quickStats = [
    { label: "Core Tech Stacks", val: "5+", icon: <Code2 size={18} /> },
    { label: "Academic Qualification", val: "MCA", icon: <BookOpen size={18} /> },
    { label: "Projects & Modules", val: "5+", icon: <Layers size={18} /> },
    { label: "Career Focus", val: "Java, Python & Web", icon: <Zap size={18} /> },
  ];

  const tabs = [
    { id: "dev", label: "Full-Stack & Python Engineer", icon: <Code2 size={16} /> },
    { id: "scholar", label: "MCA Scholar", icon: <BookOpen size={16} /> },
    { id: "dna", label: "Engineering DNA", icon: <Sparkles size={16} /> },
  ];

  return (
    <section className="about" id="about">
      <div className="about-container">
        {/* Section Header */}
        <div className="about-header">
          <div className="about-badge-tag">
            <Sparkles size={13} className="sparkle-icon" />
            <span>DISCOVER MY BACKGROUND</span>
          </div>
          <h2 className="about-heading shiny-text">
            Crafting Digital Solutions
            <br />
            With Precision & Purpose
          </h2>
          <p className="about-subheading">
            Dedicated software developer & MCA scholar specializing in Java, Python, Full-Stack web engineering, and AI/database systems.
          </p>
        </div>

        {/* Quick Stats Bar */}
        <div className="about-quick-stats">
          {quickStats.map((item, idx) => (
            <div key={idx} className="quick-stat-card">
              <div className="quick-stat-icon">{item.icon}</div>
              <div className="quick-stat-val">{item.val}</div>
              <div className="quick-stat-lbl">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Interactive Persona Tabs */}
        <div className="persona-tabs-wrapper">
          <div className="persona-tabs-bar">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`persona-tab-btn ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id as any)}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Tab Content */}
        <div className="about-dynamic-grid">
          {/* LEFT SIDE: Active Persona Story */}
          <div className="about-story-col">
            <AnimatePresence mode="wait">
              {activeTab === "dev" && (
                <motion.div
                  key="dev"
                  className="story-card"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="story-header">
                    <span className="story-chip">FULL-STACK & SYSTEMS</span>
                    <h3>Building Robust, Scalable Software</h3>
                  </div>
                  <p className="story-lead">
                    I build applications from first principles, ensuring clean architectural boundaries, normalized relational schemas, and crisp, responsive user experiences.
                  </p>
                  <p>
                    My technical foundation spans <strong>Java, Python, C/C++, SQL/MySQL, React.js, and Node.js</strong>. Whether it is engineering role-based portals or architecting high-throughput database queries, I enjoy solving complex logic puzzles and transforming business requirements into elegant code.
                  </p>

                  <div className="story-highlights">
                    <div className="story-highlight-pill">
                      <CheckCircle2 size={15} className="pill-check" />
                      <span>Object-Oriented Architecture & Clean Code Design</span>
                    </div>
                    <div className="story-highlight-pill">
                      <CheckCircle2 size={15} className="pill-check" />
                      <span>Relational Database Normalization & Indexing</span>
                    </div>
                    <div className="story-highlight-pill">
                      <CheckCircle2 size={15} className="pill-check" />
                      <span>RESTful APIs & Role-Based Authentication Flows</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "scholar" && (
                <motion.div
                  key="scholar"
                  className="story-card"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="story-header">
                    <span className="story-chip">ACADEMIC EXCELLENCE</span>
                    <h3>Master of Computer Applications (MCA)</h3>
                  </div>
                  <p className="story-lead">
                    Pursuing my post-graduate degree in Computer Applications at Savitribai Phule Pune University (SPPU), diving deep into advanced software theory and real-world system implementations.
                  </p>
                  <p>
                    My coursework bridges theoretical computer science with modern industry practices—spanning <strong>Advanced Java, Relational Database Management Systems, Distributed Web Architecture, and Software Quality Engineering</strong>.
                  </p>

                  <div className="story-highlights">
                    <div className="story-highlight-pill">
                      <CheckCircle2 size={15} className="pill-check" />
                      <span>Graduate of B.Sc. Computer Science (MES Garware College)</span>
                    </div>
                    <div className="story-highlight-pill">
                      <CheckCircle2 size={15} className="pill-check" />
                      <span>Specialized Focus on Enterprise Java & Databases</span>
                    </div>
                    <div className="story-highlight-pill">
                      <CheckCircle2 size={15} className="pill-check" />
                      <span>Data Structures & Algorithmic Problem Solving</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "dna" && (
                <motion.div
                  key="dna"
                  className="story-card"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="story-header">
                    <span className="story-chip">CORE VALUES & PHILOSOPHY</span>
                    <h3>What Drives My Work Every Day</h3>
                  </div>
                  <p className="story-lead">
                    Great software is not just about writing lines of code—it is about creating dependable, maintainable value that simplifies lives.
                  </p>
                  <div className="values-grid">
                    <div className="val-box">
                      <Target size={18} className="val-icon" />
                      <h4>Ownership</h4>
                      <p>Taking complete responsibility from idea to deployed product.</p>
                    </div>
                    <div className="val-box">
                      <Flame size={18} className="val-icon" />
                      <h4>Curiosity</h4>
                      <p>Constantly exploring modern stacks and refining software techniques.</p>
                    </div>
                    <div className="val-box">
                      <Users2 size={18} className="val-icon" />
                      <h4>Collaboration</h4>
                      <p>Transparent communication and lifting teammates up.</p>
                    </div>
                    <div className="val-box">
                      <Zap size={18} className="val-icon" />
                      <h4>Efficiency</h4>
                      <p>Writing performant, clean, and reusable components.</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* RIGHT SIDE: Structured Competency & Value Cards */}
          <div className="about-competency-col">
            <div className="competency-box">
              <div className="comp-header">
                <div className="comp-icon-wrap">
                  <Code2 size={20} className="comp-icon" />
                </div>
                <div>
                  <h4 className="comp-title">Technical Expertise</h4>
                  <span className="comp-sub">Core Stacks & Frameworks</span>
                </div>
              </div>
              <div className="comp-tags-grid">
                <span className="comp-tag">Java (OOP)</span>
                <span className="comp-tag">Python</span>
                <span className="comp-tag">C / C++</span>
                <span className="comp-tag">SQL & MySQL</span>
                <span className="comp-tag">React.js</span>
                <span className="comp-tag">Node.js</span>
                <span className="comp-tag">REST APIs</span>
                <span className="comp-tag">Git & GitHub</span>
              </div>
            </div>

            <div className="competency-box">
              <div className="comp-header">
                <div className="comp-icon-wrap">
                  <ShieldCheck size={20} className="comp-icon" />
                </div>
                <div>
                  <h4 className="comp-title">Engineering Standards</h4>
                  <span className="comp-sub">Development Best Practices</span>
                </div>
              </div>
              <ul className="comp-check-list">
                <li>
                  <CheckCircle2 size={14} className="comp-check" />
                  <span>Modular Architecture & Reusable Components</span>
                </li>
                <li>
                  <CheckCircle2 size={14} className="comp-check" />
                  <span>Database Schema Normalization & Query Efficiency</span>
                </li>
                <li>
                  <CheckCircle2 size={14} className="comp-check" />
                  <span>Cross-Browser Compatibility & Mobile Responsiveness</span>
                </li>
              </ul>
            </div>

            <div className="competency-box highlight-box">
              <div className="comp-header">
                <div className="comp-icon-wrap gold">
                  <Award size={20} className="comp-icon gold" />
                </div>
                <div>
                  <h4 className="comp-title">Ready for Opportunities</h4>
                  <span className="comp-sub">Pune, Maharashtra, India</span>
                </div>
              </div>
              <p className="comp-cta-text">
                Available for full-time Software Engineering, Java, Python, and Full-Stack Developer opportunities.
              </p>
              <div className="comp-actions">
                <a href="#projects" className="comp-action-btn">
                  <span>View Projects</span>
                  <ArrowRight size={14} />
                </a>
                <a href="#contact" className="comp-action-btn primary">
                  <span>Get In Touch</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;