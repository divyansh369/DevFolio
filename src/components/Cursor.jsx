import React, { useEffect } from 'react';
import './Cursor.css';

const Cursor = () => {
  useEffect(() => {
    const cursor = document.getElementById('cursor');
    const ring = document.getElementById('cursorRing');
    let mx = 0, my = 0, rx = 0, ry = 0;

    const handleMouseMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
    };

    const animate = () => {
      if (cursor && ring) {
        cursor.style.left = mx + 'px';
        cursor.style.top = my + 'px';
        rx += (mx - rx) * 0.12;
        ry += (my - ry) * 0.12;
        ring.style.left = rx + 'px';
        ring.style.top = ry + 'px';
      }
      requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animate();

    // Hover effects
    const elements = document.querySelectorAll('a, button, .skill-item, .proj-card, .social-link');
    elements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        if (cursor && ring) {
          cursor.style.width = '18px';
          cursor.style.height = '18px';
          ring.style.width = '54px';
          ring.style.height = '54px';
          ring.style.opacity = '.3';
        }
      });
      el.addEventListener('mouseleave', () => {
        if (cursor && ring) {
          cursor.style.width = '10px';
          cursor.style.height = '10px';
          ring.style.width = '36px';
          ring.style.height = '36px';
          ring.style.opacity = '.5';
        }
      });
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="cursor" id="cursor"></div>
      <div className="cursor-ring" id="cursorRing"></div>
    </>
  );
};

export default Cursor;
