import React from 'react';
import './ResumeSection.css';

const ResumeSection = ({ darkMode }) => {
  return (
    <section className={`resume-section hero ${darkMode ? 'dark' : 'light'}`} id="resume">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h2 className="brand-name">My Resume</h2>
        <p>
          A quick snapshot of what I bring to the table — from CRM automation to team training and retention strategy.
        </p>
        <a
          href="/Abdul_Muiz_Shiraz_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-btn"
        >
          📄 Download Resume
        </a>
      </div>
    </section>
  );
};

export default ResumeSection;
