import React from 'react';
import './HeroSection.css';

const HeroSection = ({ darkMode }) => {
  return (
    <section className={`hero section ${darkMode ? 'dark' : 'light'}`} id="home">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <span className="brand-name">Abdul Muiz Shiraz</span>
        <h1>CRM & Automation Specialist</h1>
        <p>
          I help businesses streamline lead workflows, automate client engagement, and build efficient CRM systems that scale. 
          Let’s simplify your tech stack — and boost results.
        </p>
        <a href="#contact" className="hero-btn">📬 Want to know More?</a>
      </div>
    </section>
  );
};

export default HeroSection;
