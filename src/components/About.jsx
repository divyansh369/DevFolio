import React, { useEffect, useRef } from "react";
import "./About.css";

const About = () => {
  const statsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = parseInt(entry.target.dataset.count);
            const suffix = entry.target.dataset.suffix || "+";
            let current = 0;
            const step = target / 50;
            const timer = setInterval(() => {
              current += step;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              entry.target.textContent = Math.floor(current) + suffix;
            }, 30);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 },
    );

    statsRef.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about">
      <div className="wrap">
        <div className="about-grid">
          <div className="about-text reveal-left">
            <span className="eyebrow">About Me</span>
            <h2>
              Building secure,
              <br />
              scalable <em>systems.</em>
            </h2>

            <p>
              I'm a <strong>Software Solutions Engineer at Thales</strong> (via
              L&T Technology Services), where I automate cybersecurity test
              cases and build secure software for defense-grade systems. I work
              with Python, testing frameworks, and DevOps tools to protect
              critical infrastructure.
            </p>

            <p>
              Before Thales, I worked as a{" "}
              <strong>Full Stack Developer Intern at CETPA Infotech</strong>,
              building responsive web apps with React and Node.js. I've reduced
              page load times by <strong>40%</strong>, optimized database
              queries by <strong>30%</strong>, and implemented JWT-based
              authentication systems that keep applications secure.
            </p>

            <p>
              B.Tech CSE student from IMS Engineering College, passionate about
              cybersecurity, automation, and building reliable systems. When I'm
              not writing Python scripts or debugging production issues, I'm
              exploring new technologies and solving real-world problems with
              code.
            </p>

            <a
              href="/Divyansh_github.pdf"
              download="Divyansh_Srivastava_Resume.pdf"
              className="btn btn-outline"
              style={{ marginTop: ".5rem" }}
            >
              <span>Download Résumé ↓</span>
            </a>
          </div>

          <div className="reveal-right">
            <div className="about-card">
              <div className="about-stat">
                <div
                  className="stat-num"
                  data-count="1"
                  data-suffix="+"
                  ref={(el) => (statsRef.current[0] = el)}
                >
                  1+
                </div>
                <div className="stat-label">
                  Years of development experience
                </div>
              </div>
              <div className="about-stat">
                <div
                  className="stat-num"
                  data-count="10"
                  data-suffix="+"
                  ref={(el) => (statsRef.current[1] = el)}
                >
                  0+
                </div>
                <div className="stat-label">Technologies mastered</div>
              </div>
              <div className="about-stat">
                <div
                  className="stat-num"
                  data-count="40"
                  data-suffix="%"
                  ref={(el) => (statsRef.current[2] = el)}
                >
                  0%
                </div>
                <div className="stat-label">
                  Performance improvements delivered
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
