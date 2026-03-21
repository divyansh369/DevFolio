import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      num: '01',
      title: 'MERN Estate App',
      desc: 'A full-featured real estate platform built on the MERN stack — with secure JWT authentication, listing management, and optimised database queries.',
      wins: [
        '40% faster page load via code splitting & lazy loading',
        '30% faster DB queries with MongoDB indexing',
        'Secure auth with JWT + bcrypt password hashing',
        'Responsive UI with real-time listing search'
      ],
      tags: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
      color: '#c0392b',
      github: 'https://github.com/divyansh369/Mern-Estate'
    },
    {
      num: '02',
      title: 'Automated Security Configuration Auditor',
      desc: 'A Python-based Linux security auditing tool that performs CIS benchmark checks, supports remote scanning, and generates detailed compliance reports..',
      wins: [
        "Automated CIS-based security audits across multiple Linux servers via SSH, reducing manual effort by 70%",
        "Achieved 5x faster multi-server scans using parallel execution with Python concurrency",
        "Built a centralized compliance dashboard with real-time PASS/FAIL status and per-server scores",
        "Implemented automated report rotation and archival to preserve historical audit data",
        "Improved audit accuracy through programmatic parsing of system configurations and file permissions"
      ],
      tags: ["Python", "Paramiko (SSH)", "Docker", "Paramiko", "Chart.js", "JSON-Based Reporting", "CIS Benchmarks", "React"],
      color: '#1a5c4e',
      github: 'https://github.com/divyansh369/Automated-Security-Configuration-Auditor'
    }
  ];

  return (
    <section id="projects">
      <div className="wrap">
        <div className="projects-header reveal">
          <span className="eyebrow">Selected Work</span>
          <h2>Projects that <em>perform.</em></h2>
        </div>
        <div className="projects-grid">
          {projects.map((proj, i) => (
            <div key={i} className={`proj-card ${i === 0 ? 'reveal-left' : 'reveal-right'}`} style={{'--proj-color': proj.color}}>
              <div className="proj-body">
                <div className="proj-num">{proj.num}</div>
                <div className="proj-title">{proj.title}</div>
                <p className="proj-desc">{proj.desc}</p>
                <ul className="proj-wins">
                  {proj.wins.map((win, j) => <li key={j}>{win}</li>)}
                </ul>
                <div className="proj-tags">
                  {proj.tags.map((tag, j) => <span key={j} className="tag">{tag}</span>)}
                </div>
                <div className="proj-links">
                  <a href={proj.github} target="_blank" rel="noreferrer" className="proj-link">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.23 1.84 1.23 1.07 1.84 2.81 1.3 3.5 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 013-.4c1.02.005 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                  <a href="#" className="proj-link">↗ Live Demo</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
