import React, { useEffect } from 'react';
import './Skills.css';

const Skills = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const skills = {
    languages: [
      { icon: 'C++', name: 'C++' },
      { icon: 'PY', name: 'Python' },
      { icon: 'JS', name: 'JavaScript' },
      { icon: 'HT', name: 'HTML5' },
      { icon: 'CS', name: 'CSS3' },
    ],
    frameworks: [
      { icon: 'Re', name: 'React JS' },
      { icon: 'No', name: 'Node.js' },
      { icon: 'Ex', name: 'Express' },
      { icon: 'Mg', name: 'MongoDB' },
      { icon: 'SQ', name: 'SQL' }
    ],
    tools: [
      { icon: 'Do', name: 'Docker' },
      { icon: 'K8s', name: 'Kubernetes' },
      { icon: 'Git', name: 'Git & GitHub' },
      { icon: 'PM', name: 'Postman' },
      { icon: 'Li', name: 'Linux' },
    ]
  };

  return (
    <section id="skills">
      <div className="wrap">
        <div className="skills-header reveal">
          <span className="eyebrow">Capabilities</span>
          <h2>Skills & <em>Tools</em></h2>
        </div>
        <div className="skills-categories">
          <div className="reveal" style={{transitionDelay:'.1s'}}>
            <div className="skill-cat-title">Languages</div>
            <div className="skill-items">
              {skills.languages.map((skill, i) => (
                <div key={i} className="skill-item">
                  <div className="skill-icon">{skill.icon}</div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal" style={{transitionDelay:'.2s'}}>
            <div className="skill-cat-title">Frameworks & Databases</div>
            <div className="skill-items">
              {skills.frameworks.map((skill, i) => (
                <div key={i} className="skill-item">
                  <div className="skill-icon">{skill.icon}</div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal" style={{transitionDelay:'.3s'}}>
            <div className="skill-cat-title">Tools & Platforms</div>
            <div className="skill-items">
              {skills.tools.map((skill, i) => (
                <div key={i} className="skill-item">
                  <div className="skill-icon">{skill.icon}</div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
