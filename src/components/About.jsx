import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaMapMarkerAlt, FaCode, FaHeart } from 'react-icons/fa';
import './About.css';

const About = () => {
  const aboutData = [
    {
      icon: <FaGraduationCap />,
      title: 'Education',
      description: 'Bachelor of Technology in Computer Science'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      description: 'Based in India, open to remote opportunities'
    },
    {
      icon: <FaCode />,
      title: 'Experience',
      description: 'Passionate about full-stack development and problem solving'
    },
    {
      icon: <FaHeart />,
      title: 'Interests',
      description: 'Web development, algorithms, and creating user-friendly applications'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">About Me</h2>
          <div className="section-divider"></div>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Who I Am</h3>
            <p>
            I'm a passionate Software Engineer with a solid foundation in 
            computer science and a strong drive to build impactful, real-world applications. 
            My journey into technology started with curiosity and has 
            grown into a deep enthusiasm for crafting efficient and scalable solutions.
            </p>
            
            <p>
            I specialize in full-stack development, with a focus on Java, 
            Spring Boot on the backend and React, JavaScript on the frontend. 
            I enjoy designing clean architectures, writing maintainable code, 
            and solving complex problems using strong data structures and algorithms.
            </p>

            <p>
            Beyond development, I’m always exploring new technologies,
             improving my skills through algorithmic challenges, 
             and staying current with industry best practices. 
             My goal is to create robust, user-friendly applications that 
             deliver seamless experiences and high performance.
            </p>
          </motion.div>

          <motion.div
            className="about-stats"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="stats-grid">
              {aboutData.map((item, index) => (
                <motion.div
                  key={index}
                  className="stat-item"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="stat-icon">{item.icon}</div>
                  <h4 className="stat-title">{item.title}</h4>
                  <p className="stat-description">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="about-quote"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <blockquote>
            "The best way to predict the future is to invent it."
            <cite>- Alan Kay</cite>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 