import React from 'react';
import './Amenities.css';

const Amenities = () => {
  const amenities = [
    { name: 'Ganesha Temple', icon: '🛕' },
    { name: 'Reflexology Path', icon: '🦶' },
    { name: 'Guest Room', icon: '🏨' },
    { name: 'Library', icon: '📚' },
    { name: 'Wellness Lawn', icon: '🌿' },
    { name: 'Cove seating', icon: '💺' },
    { name: 'Pool With Jacuzzi', icon: '🏊' },
    { name: 'Net Cricket (4 x 25 mt)', icon: '🏏' },
    { name: 'Open Café', icon: '☕' },
    { name: 'Kids Play Area', icon: '🧒' },
    { name: 'Experiential Walk', icon: '🚶' },
    { name: 'Amphi seating on mound', icon: '🎭' },
    { name: 'Elevated Jogging Track', icon: '🏃' },
    { name: 'Event lawn', icon: '🎪' },
    { name: 'BBQ Plaza', icon: '🔥' }
  ];

  return (
    <section className="amenities-section">
      <div className="amenities-container">
        {/* Header */}
        <div className="amenities-header">
          <h2 className="amenities-title">
            The Akhand - Lifestyle Amenities
          </h2>
          <div className="title-underline"></div>
          <p className="amenities-subtitle">
            Experience unparalleled luxury with our world-class amenities designed for your comfort and lifestyle
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="amenities-grid">
          {amenities.map((amenity, index) => (
            <div key={index} className="amenity-card">
              <div className="amenity-icon">{amenity.icon}</div>
              <div className="amenity-name">{amenity.name}</div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="amenities-cta">
          <button className="view-all-btn">
            <span className="btn-dots">......</span>
            View 30+ Amenities
            <span className="btn-arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Amenities;