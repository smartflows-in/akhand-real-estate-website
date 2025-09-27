import React, { useState } from 'react';
import './Location.css';

const Location = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null); // Now stores both category and option

  const locationData = {
    'Connectivity': {
      'Vasai Railway Station': 'https://maps.google.com/?q=Vasai+Railway+Station',
      'Western Express Highway': 'https://maps.google.com/?q=Western+Express+Highway+Vasai',
      'Mumbai-Ahmedabad Highway': 'https://maps.google.com/?q=Mumbai+Ahmedabad+Highway+Vasai',
      'Local Bus Stand': 'https://maps.google.com/?q=Vasai+Bus+Stand'
    },
    'Schools': {
      'St. Mary\'s High School': 'https://maps.google.com/?q=St+Marys+High+School+Vasai',
      'Vasai Vikas High School': 'https://maps.google.com/?q=Vasai+Vikas+High+School',
      'Podar International School': 'https://maps.google.com/?q=Podar+International+School+Vasai',
      'St. Augustine School': 'https://maps.google.com/?q=St+Augustine+School+Vasai'
    },
    'Malls': {
      'Vasai Mall': 'https://maps.google.com/?q=Vasai+Mall',
      'City Center Mall': 'https://maps.google.com/?q=City+Center+Mall+Vasai',
      'Shopping Plaza': 'https://maps.google.com/?q=Shopping+Plaza+Vasai',
      'Metro Mall': 'https://maps.google.com/?q=Metro+Mall+Vasai'
    },
    'Healthcare': {
      'Vasai General Hospital': 'https://maps.google.com/?q=Vasai+General+Hospital',
      'Apollo Clinic': 'https://maps.google.com/?q=Apollo+Clinic+Vasai',
      'City Hospital': 'https://maps.google.com/?q=City+Hospital+Vasai',
      'Medicare Center': 'https://maps.google.com/?q=Medicare+Center+Vasai'
    },
    'Upcoming Infrastructure': {
      'Metro Line Extension': 'https://maps.google.com/?q=Vasai+Metro+Extension',
      'Smart City Project': 'https://maps.google.com/?q=Vasai+Smart+City',
      'Business Park': 'https://maps.google.com/?q=Vasai+Business+Park',
      'IT Hub': 'https://maps.google.com/?q=Vasai+IT+Hub'
    }
  };

  const toggleDropdown = (category) => {
    setOpenDropdown(openDropdown === category ? null : category);
  };

  const handleOptionSelect = (category, option) => {
    // If clicking the same option, deselect it
    if (selectedOption && selectedOption.category === category && selectedOption.option === option) {
      setSelectedOption(null);
    } else {
      // Select new option (automatically deselects previous one)
      setSelectedOption({
        category,
        option,
        url: locationData[category][option]
      });
    }
    setOpenDropdown(null);
  };

  // Check if a specific option is selected
  const isOptionSelected = (category, option) => {
    return selectedOption && selectedOption.category === category && selectedOption.option === option;
  };

  // Check if a category has any selected option
  const hasCategorySelection = (category) => {
    return selectedOption && selectedOption.category === category;
  };

  const getMapUrl = () => {
    if (selectedOption) {
      return selectedOption.url.replace('/?q=', '/embed?q=');
    }
    return 'https://maps.google.com/maps?q=Vasai+East+Mumbai&output=embed';
  };

  return (
    <section id="location" className="location-section">
      <div className="location-container">
        <div className="location-header">
          <h2 className="location-title">
            Techton Akhand at <span className="text-gold">Vasai East</span>
          </h2>
        </div>

        <div className="location-content">
          {/* Left Side - Map */}
          <div className="map-container">
            {/* Selected Location Info - Now on top of map */}
            {selectedOption && (
              <div className="selected-info-top">
                <div className="selected-badge">
                  <span className="selected-category">{selectedOption.category}</span>
                  <span className="selected-option">{selectedOption.option}</span>
                </div>
                <a 
                  href={selectedOption.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="view-full-map-btn"
                >
                  View Full Map →
                </a>
              </div>
            )}
            
            <div className="map-wrapper">
              <iframe
                src={getMapUrl()}
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '15px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              ></iframe>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="content-container">
            {/* Description Section */}
            <div className="description-section">
              <h3 className="description-title">
                <span className="title-gradient">Vasai's Future Ready Homes</span>
              </h3>
              <p className="description-text">
                With 8+ upcoming infrastructures, Vasai East is on the brink of rapid growth. 
                Offering world-class schools, colleges, healthcare, and seamless connectivity, 
                it stands as a prime destination-perfect for both living and smart investment.
              </p>
            </div>

            {/* Dropdowns Section - All in one box */}
            <div className="dropdowns-main-box">
              <h4 className="dropdowns-main-title">Explore Nearby Amenities</h4>
              <p className="dropdowns-subtitle">Select one location to view on map</p>
              
              <div className="dropdowns-container">
                {Object.keys(locationData).map((category) => (
                  <div key={category} className="dropdown-item-wrapper">
                    <div className="custom-dropdown">
                      <button 
                        className={`dropdown-toggle ${hasCategorySelection(category) ? 'has-selection' : ''}`}
                        onClick={() => toggleDropdown(category)}
                      >
                        <span className="dropdown-main-label">{category}</span>
                        <span className="dropdown-selection">
                          {hasCategorySelection(category) && (
                            <>
                              <span className="selection-dot"></span>
                              {selectedOption.option}
                            </>
                          )}
                        </span>
                        <span className={`dropdown-arrow ${openDropdown === category ? 'open' : ''}`}>
                          ▼
                        </span>
                      </button>
                      
                      {openDropdown === category && (
                        <div className="dropdown-options-menu">
                          {Object.keys(locationData[category]).map((option) => (
                            <div
                              key={option}
                              className={`option-item ${isOptionSelected(category, option) ? 'selected' : ''}`}
                              onClick={() => handleOptionSelect(category, option)}
                            >
                              <span className="option-checkbox">
                                {isOptionSelected(category, option) ? '✓' : ''}
                              </span>
                              {option}
                              {isOptionSelected(category, option) && (
                                <span className="active-indicator">●</span>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Clear Selection Button */}
              {selectedOption && (
                <div className="clear-selection">
                  <button 
                    className="clear-btn"
                    onClick={() => setSelectedOption(null)}
                  >
                    ✕ Clear Selection
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;