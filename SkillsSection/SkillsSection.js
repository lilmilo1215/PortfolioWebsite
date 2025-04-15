import React from 'react';
import './SkillsSection.css';

const SkillsSection = ({ darkMode }) => {
  return (
    <section className={`skills-section hero ${darkMode ? 'dark' : 'light'}`} id="skills">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h2 className="brand-name">Skills & Tools</h2>
        <p className="skills-intro">From CRM strategy to automation and communication — here's what I bring to the table.</p>

        <div className="skills-grid">
          <div className="skill-category">
            <h3>CRM & Automation</h3>
            <ul>
              <li>Go High Level (GHL)</li>
              <li>Lead Generation Funnels</li>
              <li>Workflow & Task Automation</li>
              <li>Client Retention Strategy</li>
              <li>CRM Training & Onboarding</li>
            </ul>
          </div>

          <div className="skill-category">
            <h3>Tools & Platforms</h3>
            <ul>
              <li>Trello & Zapier</li>
              <li>Google Workspace</li>
              <li>Google Sheets (Certified)</li>
              <li>Slack, Zoom, Discord</li>
              <li>Data Studio & Excel</li>
            </ul>
          </div>

          <div className="skill-category">
            <h3>Soft Skills</h3>
            <ul>
              <li>Executive Communication</li>
              <li>Cross-functional Collaboration</li>
              <li>Team Leadership</li>
              <li>Creative Problem Solving</li>
              <li>Remote-First Workflow Mastery</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
