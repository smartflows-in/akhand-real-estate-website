import React from 'react';
import './About.css';

const About = () => {
  const features = [
    { number: '1 Acre', label: 'Open Podium Space' },
    { number: '10 ft', label: 'Floor to Floor Heights' },
    { number: 'Ganesha Temple', label: 'in premises' },
    { number: '18,000 Sqft', label: 'High Street Retail' },
    { number: '30+', label: 'Luxury Lifestyle Amenities' },
    { number: '4Ft Wide', label: 'Balcony' },
    { number: 'Premium', label: 'Gated Community' }
  ];

  return (
    <section id="overview"  className="about-section">
      <div className="about-container">
        {/* Header Section */}
        <div className="about-header">
          <h2 className="about-title">
            Akhand - <span className="title-accent">Live Your Dream</span>
          </h2>
          <div className="title-underline"></div>
        </div>

        {/* Content Grid */}
        <div className="about-content">
          {/* Text Content */}
          <div className="about-text">
            <p className="about-paragraph">
              Techton Akhand is where life finds its true rhythm and it feels like home from the very
              first moment. Set in the heart of Vasai east, it offers spacious homes filled with light and
              warmth, alongside everyday joys like a swim, a movie night, a workout, or a friendly
              match on the cricket turf.
            </p>
            <p className="about-paragraph">
              Thoughtfully designed inside and out, Akhand isn't just about walls and spaces—it's
              about family, togetherness, and creating a community where happiness, comfort, and
              belonging naturally come alive.
            </p>
                   {/* CTA Section */}
        <div className="about-cta">
          <button className="brochure-download-btn">
            <span className="btn-icon">📥</span>
            Download Brochure
          </button>
        </div>
          </div>

          {/* Features Grid */}
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-number">{feature.number}</div>
                <div className="feature-label">{feature.label}</div>
              </div>
            ))}
          </div>
        </div>

 
      </div>
    </section>
  );
};

export default About;