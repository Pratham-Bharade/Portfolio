import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import "./Skills.css";

const skillsData = [
  { category: "Frontend", skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"] },
  { category: "Backend", skills: ["Node.js", "Express.js", "MySQL", "REST APIs"] },
  { category: "Languages", skills: ["C", "C++", "Java", "Python"] },
  { category: "Tools", skills: ["Git", "GitHub", "VS Code", "Postman"] },
];

function Skills() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <section className="skills" id="skills">
      <h2 className="skills-title shiny-text">My Skills</h2>
      <p className="skills-subtitle">Click a category to see my technical expertise</p>

      <div className="skills-grid">
        {skillsData.map((item) => (
          <div
            key={item.category}
            className={`skill-category-card ${activeCategory === item.category ? "active" : ""}`}
            onClick={() => setActiveCategory(activeCategory === item.category ? null : item.category)}
          >
            <h3>{item.category}</h3>
            
            <AnimatePresence>
              {activeCategory === item.category && (
                <motion.div
                  className="skills-list"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={{
                    visible: { transition: { staggerChildren: 0.1 } },
                    hidden: {}
                  }}
                >
                  {item.skills.map((skill, index) => (
                    <motion.span
                      key={index}
                      className="skill-tag"
                      variants={{
                        hidden: { opacity: 0, y: 20, scale: 0.8 },
                        visible: { opacity: 1, y: 0, scale: 1 }
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
            
            {activeCategory !== item.category && (
              <div className="click-hint">Click to expand</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
