import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import ProgressBar from './components/ProgressBar';
import BackToTop from './components/BackToTop';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'light';
    setTheme(saved);
    document.documentElement.setAttribute('data-theme', saved);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <div className="App">
      <ProgressBar />
      <Cursor />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <BackToTop />
      <Hero />
      <div className="divider"></div>
      <About />
      <div className="divider"></div>
      <Skills />
      <div className="divider"></div>
      <Projects />
      <div className="divider"></div>
      <Experience />
      <div className="divider"></div>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
