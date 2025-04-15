import React from 'react';
import './AboutSection.css';

const AboutSection = ({ darkMode }) => {
  return (
    <section className={`about-section hero section ${darkMode ? 'dark' : 'light'}`} id="about">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h2 className="brand-name">About Me</h2>
        <p>
          I’m Abdul Muiz Shiraz — a CRM & Automation Specialist with deep experience in
          Go High Level, client engagement systems, and operations strategy.
          I help teams build smart, scalable systems that connect with people and convert leads.
        </p>
        <p>
          My background includes designing automation pipelines, training CRM teams from scratch,
          and driving measurable results like a <strong>40% boost in response rates</strong> and <strong>80%+ client retention</strong>.
          I’m all about simplifying the complex — and making tools work for people, not the other way around.
        </p>
        <p>
          When I’m not building CRMs, I’m probably organizing life in Notion, geeking out over automations & new tools, or sipping tea like it’s part of my workflow.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
