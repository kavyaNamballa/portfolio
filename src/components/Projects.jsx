import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaLaptop } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Coupon Hub',
      description: 'A platform that allows users to share and exchange unused coupons in a community-driven platform.',
      image: 'https://images.unsplash.com/photo-1607082349566-187342175e2f?w=400&h=300&fit=crop&crop=center',
      technologies: ['Java', 'Spring Boot', 'React.js', 'TypeScript', 'MySQL', 'Flyway'],
      github: 'https://github.com/kavyaNamballa/coupon-hub-ui',
      live: 'https://coupons-hub.netlify.app/',
      category: 'Full Stack'
    },
    {
      title: 'Reaction Time Game',
      description: 'A grid-based reaction game with progressive difficulty, dynamic DOM manipulation, timers, and localStorage-based leaderboard tracking.',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop&crop=center',
      technologies: ['Javascript', 'HTML', 'CSS', 'DOM'],
      github: 'https://github.com/kavyaNamballa/reactionTimeGame',
      live: 'https://reaction-time-kavya.netlify.app/',
      category: 'Frontend'
    },
    {
      title: 'Eazy School',
      description: 'A comprehensive web-based school management platform with features for student management, teacher management, and parent management.',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop&crop=center',
      technologies: ['Spring MVC', 'Hibernate', 'Thymeleaf'],
      github: 'https://github.com/kavyaNamballa/eazySchool',
      // live: 'https://blog-platform-demo.vercel.app',
      category: 'Full Stack'
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and Framer Motion for smooth animations and interactions.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center',
      technologies: ['React.js', 'Framer Motion', 'CSS3', 'React Icons'],
      github: 'https://github.com/kavyaNamballa/portfolio',
      live: 'https://kavyanamballa.github.io/portofolio/',
      category: 'Frontend'
    },
    {
      title: 'Secure Entry System',
      description: 'A secure registration and login system improved user experience with custom validations and error handling',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&crop=center',
      technologies: ['Spring Security', 'Custom Annotations', 'JWT'],
      github: 'https://github.com/kavyaNamballa/secureEntrySystem',
      // live: 'https://api-gateway-demo.herokuapp.com',
      category: 'Backend'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-divider"></div>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
                <div className="project-category">
                  <span>{project.category}</span>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="projects-cta"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="cta-content">
            <h3>Interested in seeing more?</h3>
            <p>Check out my GitHub profile for more projects and contributions</p>
            <a
              href="https://github.com/kavyaNamballa"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <FaGithub />
              View GitHub Profile
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 