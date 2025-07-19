import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const socialLinks = [
    {
      icon: <FaGithub />,
      url: 'https://github.com/kavyaNamballa',
      label: 'GitHub'
    },
    {
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/in/kavya-namballa-188169259/',
      label: 'LinkedIn'
    },
    {
      icon: <FaEnvelope />,
      url: 'mailto:namballakavya@gmail.com',
      label: 'Email'
    }
  ];

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = './Resume.pdf';
    link.download = 'Kavya_Namballa_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hi, I'm <span className="highlight">Kavya Namballa</span>
            </motion.h1>
            
            <motion.h2
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Software Engineer & Java Developer
            </motion.h2>
            
            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Passionate about developing innovative solutions and building 
              user-friendly applications that make a difference. 
              I love turning complex problems into simple solutions — optimized for speed, scalability.
            </motion.p>
            
            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="btn btn-primary"
              >
                View My Work
              </Link>
              <button
                onClick={handleResumeDownload}
                className="btn btn-resume"
              >
                <FaDownload /> Download Resume
              </button>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="btn btn-secondary"
              >
                Get In Touch
              </Link>
            </motion.div>
            
            <motion.div
              className="social-links"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="image-container">
              <img
                src="kavyaa.png"
                alt="Kavya Namballa"
                className="profile-image"
              />
              <div className="image-background"></div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <Link to="about" smooth={true} duration={500}>
            <div className="scroll-arrow"></div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 