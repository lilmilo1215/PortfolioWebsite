import React from 'react';
import './Header.css';

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className={`header ${darkMode ? 'dark' : 'light'}`}>
      <div className="header-inner">
        <a href="#home" className="logo">AMS</a>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>
        </nav>
        <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>
    </header>
  );
};

export default Header;
