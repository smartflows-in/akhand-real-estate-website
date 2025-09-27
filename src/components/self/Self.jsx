import React from 'react';
import './Self.css';

const About = () => {
  return (
    <section id="self--about" className="self--about-section">
      <div className="self--about-overlay"></div>
      <div className="self--about-container">
        <div className="self--about-content">
          <div className="self--about-header">
            <span className="self--about-subtitle">Our Legacy</span>
            <h2 className="self--about-title">
              Stronger Structures. Safer Tomorrow. <span className="self--text-gold">Since 1974.</span>
            </h2>
          </div>
          
          <div className="self--about-grid">
            <div className="self--glassmorphism-box">
              <div className="self--glass-content">
                <p className="self--about-paragraph">
                  At <span className="self--text-gold">Techton</span> (earlier United Engineers), we've been 
                  helping India build, restore, and protect its structures for over 50 years. 
                  Starting from Mumbai, we have proudly worked with both public and private 
                  organizations, ensuring that every project stands strong today—and for years to come.
                </p>
                
                <p className="self--about-paragraph">
                  At Techton, we believe every structure deserves to be safe, strong, and lasting—
                  and we're here to make that happen.
                </p>
                
                <div className="self--about-stats">
                  <div className="self--stat-item">
                    <span className="self--stat-number">50+</span>
                    <span className="self--stat-label">Years of Excellence</span>
                  </div>
                  <div className="self--stat-item">
                    <span className="self--stat-number">1000+</span>
                    <span className="self--stat-label">Projects Completed</span>
                  </div>
                  <div className="self--stat-item">
                    <span className="self--stat-number">24/7</span>
                    <span className="self--stat-label">Commitment</span>
                  </div>
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