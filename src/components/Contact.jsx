import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact">
      <div className="wrap">
        <div className="contact-inner">
          <div className="reveal-left">
            <span className="eyebrow">Get in Touch</span>
            <h2>Let's build<br/>something <em>great.</em></h2>
            <p className="contact-sub">Open to full-time roles, freelance projects, and interesting collaborations. Don't hesitate to reach out.</p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/divyansh-srivastava-5a5956206/" target="_blank" rel="noreferrer" className="social-link">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
                <span>LinkedIn — /divyansh-srivastava</span>
              </a>
              <a href="https://github.com/divyansh369" target="_blank" rel="noreferrer" className="social-link">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.23 1.84 1.23 1.07 1.84 2.81 1.3 3.5 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 013-.4c1.02.005 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <span>GitHub — /divyansh369</span>
              </a>
              <a href="mailto:divyanshsrivastava215@gmail.com" className="social-link">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="M2 7l10 7 10-7"/>
                </svg>
                <span>divyanshsrivastava215@gmail.com</span>
              </a>
            </div>
          </div>
          <div className="reveal-right">
            <div className="form-group">
              <label>Your Name</label>
              <input type="text" placeholder="Divyansh Srivastava"/>
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="hello@example.com"/>
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="Tell me about your project…"></textarea>
            </div>
            <button 
              className="btn" 
              onClick={handleSubmit}
              style={sent ? {background:'var(--teal)'} : {}}
            >
              <span>{sent ? 'Message Sent ✓' : 'Send Message →'}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
