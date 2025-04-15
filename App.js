import React, { useState } from 'react';
import Header from './components/MainPage/Header/Header';
import HeroSection from './components/MainPage/HeroSection/HeroSection';
import AboutSection from './components/MainPage/AboutSection/AboutSection';
import ResumeSection from './components/MainPage/ResumeSection/ResumeSection';
import ContactSection from './components/MainPage/ContactSection/ContactSection';
import SkillsSection from './components/MainPage/SkillsSection/SkillsSection';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`App ${darkMode ? 'dark' : 'light'}`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <HeroSection darkMode={darkMode} />
        <AboutSection darkMode={darkMode} />
        <SkillsSection darkMode={darkMode} />
        <ResumeSection darkMode={darkMode} />
        <ContactSection darkMode={darkMode} />
      </main>
    </div>
  );
}

export default App;
