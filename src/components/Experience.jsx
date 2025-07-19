import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineering Intern',
      company: 'Testsigma Software Technologies',
      period: '2024 - Present',
      location: 'Onsite',
      description: [
        'Built a microservice for optimized dynamic API routing using Spring Cloug Gateway',
        'Converted heavy non-reactive processes to reactive, leveraging Java virtual threads to reduce resource usage and improve throughput.',
        'Resolved 150+ customer-reported issues and bugs, enhancing product stability and user satisfaction.',
        'Collaborated with frontend, DevOps, and product teams to deliver stable features across services.',
      ],
      technologies: ['Core Java', 'Spring Boot', 'React.js', 'AWS', 'Docker', 'Git']
    },
    {
      title: 'Joint Secretary',
      company: 'SGC Coding Club',
      period: '2022 - 2023',
      location: 'Academic',
      description: [
        'Led a dynamic coding club of 30+ members within the university, fostering a collaborative environment for aspiring developers.',
        'Organized coding competitions and workshops to enhance technical skills and problem-solving abilities.',
        'Collaborated with university administration to promote coding culture and encourage participation in hackathons and coding competitions.'
      ],
      technologies: ['Data Structures', 'Algorithms']
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Work Experience</h2>
          <div className="section-divider"></div>
        </motion.div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="job-title">{exp.title}</h3>
                  <div className="job-meta">
                    <div className="meta-item">
                      <FaBriefcase className="meta-icon" />
                      <span>{exp.company}</span>
                    </div>
                    <div className="meta-item">
                      <FaCalendarAlt className="meta-icon" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="meta-item">
                      <FaMapMarkerAlt className="meta-icon" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                
                <div className="job-description">
                  <ul>
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="job-technologies">
                  {exp.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {/*
        <motion.div
          className="experience-summary"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="summary-content">
            <h3>Career Highlights</h3>
            <div className="highlights-grid">
              <div className="highlight-item">
                <span className="highlight-number">3+</span>
                <span className="highlight-label">Years Experience</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">15+</span>
                <span className="highlight-label">Projects Completed</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">10+</span>
                <span className="highlight-label">Technologies</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">100%</span>
                <span className="highlight-label">Client Satisfaction</span>
              </div>
            </div>
          </div>
        </motion.div>
        */}
      </div>
    </section>
  );
};

export default Experience; 