import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ theme, toggleTheme }) => {
  const [time, setTime] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true }) + ' IST');
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <nav id="navbar" style={{ boxShadow: scrolled ? '0 2px 24px rgba(17,16,8,.08)' : 'none' }}>
        <div className="nav-logo">D<span>.</span>Srivastava</div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="nav-right">
          <div className="nav-time">{time}</div>
          <button className="theme-btn" onClick={toggleTheme} aria-label="Toggle dark mode"></button>
          <button className="hamburger" onClick={() => setMobileOpen(!mobileOpen)}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        <a href="#about" onClick={closeMobile}>About</a>
        <a href="#skills" onClick={closeMobile}>Skills</a>
        <a href="#projects" onClick={closeMobile}>Projects</a>
        <a href="#experience" onClick={closeMobile}>Experience</a>
        <a href="#contact" onClick={closeMobile}>Contact</a>
      </div>
    </>
  );
};

export default Navbar;
