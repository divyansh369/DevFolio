import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const canvasRef = useRef(null);
  const lineRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    // Particles animation
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    class Particle {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.r = Math.random() * 1.5 + 0.5;
        this.a = Math.random() * 0.4 + 0.1;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset();
      }
      draw() {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = isDark ? `rgba(224,85,64,${this.a})` : `rgba(192,57,43,${this.a})`;
        ctx.fill();
      }
    }

    const particles = Array.from({ length: 60 }, () => new Particle());

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      
      particles.forEach(p => { p.update(); p.draw(); });
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = isDark 
              ? `rgba(224,85,64,${0.07 * (1 - dist / 100)})`
              : `rgba(192,57,43,${0.07 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(animate);
    };
    animate();

    // Mouse line tracking
    const handleMouseMove = (e) => {
      if (!heroRef.current || !lineRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const dx = e.clientX - rect.left - rect.width / 2;
      const dy = e.clientY - rect.top - rect.height / 2;
      const angle = Math.atan2(dy, dx) * 180 / Math.PI;
      const dist = Math.min(Math.hypot(dx, dy), 260);
      lineRef.current.style.width = (80 + dist / 3) + 'px';
      lineRef.current.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
      lineRef.current.style.opacity = 0.15 + dist / 1000;
    };

    const handleMouseLeave = () => {
      if (!lineRef.current) return;
      lineRef.current.style.width = '120px';
      lineRef.current.style.transform = 'translate(-50%, -50%) rotate(0deg)';
      lineRef.current.style.opacity = '0.2';
    };

    const hero = heroRef.current;
    if (hero) {
      hero.addEventListener('mousemove', handleMouseMove);
      hero.addEventListener('mouseleave', handleMouseLeave);
    }

    // Animate hero words
    setTimeout(() => {
      document.querySelectorAll('.hero-name .word').forEach(w => {
        w.style.opacity = '1';
        w.style.transform = 'none';
      });
    }, 80);

    return () => {
      window.removeEventListener('resize', resize);
      if (hero) {
        hero.removeEventListener('mousemove', handleMouseMove);
        hero.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <section id="hero" ref={heroRef}>
      <canvas ref={canvasRef} id="particleCanvas"></canvas>
      <div className="hero-grid"></div>
      <div className="hero-shapes">
        <svg className="floating" style={{top:'12%',left:'8%',opacity:.22}} width="48" height="48" viewBox="0 0 48 48">
          <circle cx="24" cy="24" r="20" fill="none" stroke="#c0392b" strokeWidth="1"/>
          <circle cx="24" cy="24" r="8" fill="none" stroke="#c0392b" strokeWidth="1"/>
        </svg>
        <svg className="floating2" style={{top:'20%',right:'10%',opacity:.18}} width="60" height="60" viewBox="0 0 60 60">
          <rect x="10" y="10" width="40" height="40" fill="none" stroke="#1a5c4e" strokeWidth="1" transform="rotate(15 30 30)"/>
        </svg>
        <svg className="floating3" style={{bottom:'25%',left:'6%',opacity:.2}} width="40" height="40" viewBox="0 0 40 40">
          <line x1="0" y1="20" x2="40" y2="20" stroke="#9a6f0a" strokeWidth="1"/>
          <line x1="20" y1="0" x2="20" y2="40" stroke="#9a6f0a" strokeWidth="1"/>
          <line x1="5" y1="5" x2="35" y2="35" stroke="#9a6f0a" strokeWidth="1"/>
        </svg>
      </div>
      <div className="mouse-line" ref={lineRef}></div>
      <div className="hero-inner">
        <p className="hero-eyebrow">Hello, world —</p>
        <h1 className="hero-name">
          <span className="word" style={{transitionDelay:'.3s'}}>I'm</span>{' '}
          <span className="word" style={{color:'var(--accent)',fontStyle:'italic',transitionDelay:'.42s'}}>Divyansh</span><br/>
          <span className="word" style={{transitionDelay:'.54s'}}>Srivastava</span>
        </h1>
        <p className="hero-sub">Full Stack Developer focused on building fast,<br/>responsive, and secure web applications.</p>
        <div className="hero-btns">
          <a href="#contact" className="btn"><span>Get in Touch ↓</span></a>
          <a href="#projects" className="btn btn-outline"><span>View Projects →</span></a>
        </div>
      </div>
      <div className="scroll-hint">Scroll</div>
    </section>
  );
};

export default Hero;
