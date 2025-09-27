import React from 'react';
import './Amenities.css';

const Amenities = () => {
  const amenities = [
    'Ganesha Temple',
    'Reflexology Path', 
    'Guest Room',
    'Library',
    'Wellness Lawn',
    'Cove seating',
    'Pool With Jacuzzi',
    'Net Cricket (4 x 25 mt)',
    'Open Café',
    'Kids Play Area',
    'Experiential Walk',
    'Amphi seating on mound',
    'Elevated Jogging Track',
    'Event lawn',
    'BBQ Plaza'
  ];

  return (
    <section id="amenities" className="amenities-section">
      <div className="amenities-container">
        {/* Section Header */}
        <div className="amenities-header">
          <h2 className="amenities-title">
            The Akhand - <span className="text-gold">Lifestyle Amenities</span>
          </h2>
        </div>

        {/* Premium Amenities Grid */}
        <div className="amenities-premium-grid">
          {amenities.map((amenity, index) => (
            <div key={index} className="amenity-card-premium">
              <div className="amenity-gold-bar"></div>
              <div className="amenity-content">
                <span className="amenity-icon">◆</span>
                <span className="amenity-name">{amenity}</span>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="view-more-premium">
          <button className="view-more-btn-premium">
            ......View 30+ Amenities
            <span className="btn-glow"></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Amenities;