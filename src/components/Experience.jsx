import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience">
      <div className="wrap">
        <div className="reveal">
          <span className="eyebrow">Career</span>
          <h2>Experience & <em>Timeline</em></h2>
        </div>
        <div className="timeline">
          <div className="tl-item reveal-left">
            <div className="tl-dot"></div>
            <div className="tl-period">Mar 2025 — Present</div>
            <div className="tl-role">Software Engineer</div>
            <div className="tl-company">Thales · via L&T Technology Services</div>
            <ul className="tl-points">
              <li>Built an internal dashboard using HTML, CSS, JavaScript, Python APIs to deliver real-time system insights; improved team visibility by 40%.</li>
              <li>Developed Python backend modules for secure filesystem workflows, strengthening encryption/decryption reliability.</li>
              <li>Created Kubernetes + Python tooling to support secure microservice deployments and stable encrypted pods.</li>
              <li>Improved platform security by resolving 50+ critical system issues alongside engineering teams.</li>
            </ul>
          </div>
          <div className="tl-item reveal-left" style={{transitionDelay:'.15s'}}>
            <div className="tl-dot" style={{background:'var(--teal)'}}></div>
            <div className="tl-period">June 2023 — July 2023</div>
            <div className="tl-role">Full Stack Developer Intern</div>
            <div className="tl-company">CETPA Infotech</div>
            <ul className="tl-points">
              <li>Built responsive web applications using React and modern CSS, improving UX across devices.</li>
              <li>Worked with RESTful APIs and integrated frontend components with Node.js backends.</li>
              <li>Optimized user experience through performance improvements.</li>
              <li>Collaborated with design teams to implement pixel-perfect interfaces.</li>
              <li>Gained hands-on experience with full-stack development workflows.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
