import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase,
  FaGitAlt, FaDocker, FaAws, FaPython, FaJava
} from 'react-icons/fa';
import { SiTypescript, SiSpringboot } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'HTML5', icon: <FaHtml5 />, level: 90, color: '#e34f26' },
        { name: 'CSS3', icon: <FaCss3Alt />, level: 70, color: '#1572b6' },
        { name: 'JavaScript', icon: <FaJs />, level: 90, color: '#f7df1e' },
        { name: 'React.js', icon: <FaReact />, level: 90, color: '#61dafb' },
        { name: 'TypeScript', icon: <SiTypescript />, level: 85, color: '#3178c6' },
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Java', icon: <FaJava />, level: 95, color: '#ed8b00' },
        { name: 'Spring Boot', icon: <SiSpringboot />, level: 90, color: '#6db33f' },
        { name: 'Python', icon: <FaPython />, level: 75, color: '#3776ab' },
      ]
    },
    {
      title: 'Database & Tools',
      skills: [
        { name: 'MySQL', icon: <FaDatabase />, level: 95, color: '#336791' },
        { name: 'Git', icon: <FaGitAlt />, level: 95, color: '#f05032' },
        { name: 'Docker', icon: <FaDocker />, level: 90, color: '#2496ed' },
        { name: 'AWS', icon: <FaAws />, level: 65, color: '#ff9900' }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="section-divider"></div>
        </motion.div>

        <div className="skills-content">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="skill-category"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skill-item"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="skill-header">
                      <div className="skill-icon" style={{ color: skill.color }}>
                        {skill.icon}
                      </div>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        style={{ backgroundColor: skill.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="skills-summary"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="summary-card">
            <h4>Additional Skills</h4>
            <div className="additional-skills">
              <span className="skill-tag">RESTful APIs</span>
              <span className="skill-tag">Database Management</span>
              <span className="skill-tag">Performance Optimization</span>
              <span className="skill-tag">Authentication & Authorization</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 