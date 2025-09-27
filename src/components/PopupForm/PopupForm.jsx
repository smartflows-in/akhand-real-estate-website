import React, { useState, useEffect } from 'react';
import './PopupForm.css';

const PopupForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    updates: false
  });

  // Show popup after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000); // Change this value to adjust timing

    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Popup form submitted:', formData);
    // Handle form submission here
    handleClose();
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleBackgroundClick = (e) => {
    if (e.target.classList.contains('popup-overlay')) {
      handleClose();
    }
  };

  if (!isVisible) return null;

  return (
    <div className="popup-overlay" onClick={handleBackgroundClick}>
      <div className="popup-container">
        <button className="popup-close-btn" onClick={handleClose}>
          <span>×</span>
        </button>
        
        <div className="popup-content">
          <div className="popup-image-section">
            <div className="popup-image-placeholder">
              <span className="popup-image-text">Premium Real Estate Development</span>
            </div>
          </div>

          <div className="popup-form-section">
            <div className="popup-header">
              <h3 className="popup-main-title">5:95 Payment Ease</h3>
              <div className="popup-pricing">
                <div className="popup-price-item">
                  <span className="popup-bhk">1 BHK</span>
                  <span className="popup-price">Starting 48 Lakhs</span>
                </div>
                <div className="popup-price-item">
                  <span className="popup-bhk">2 BHK</span>
                  <span className="popup-price">Starting 68 Lakhs</span>
                </div>
                <div className="popup-price-item">
                  <span className="popup-bhk">3 BHK</span>
                  <span className="popup-price">Starting 98 Lakhs</span>
                </div>
              </div>
            </div>

            <form className="popup-form" onSubmit={handleSubmit}>
              <div className="popup-form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="popup-form-input"
                  placeholder="Name"
                  required
                />
                <div className="popup-input-underline"></div>
              </div>

              <div className="popup-form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="popup-form-input"
                  placeholder="Email"
                  required
                />
                <div className="popup-input-underline"></div>
              </div>

              <div className="popup-form-group">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="popup-form-input"
                  placeholder="Phone"
                  required
                />
                <div className="popup-input-underline"></div>
              </div>

              <div className="popup-form-group">
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="popup-form-input"
                  placeholder="Location"
                  required
                />
                <div className="popup-input-underline"></div>
              </div>

              <div className="popup-checkbox-group">
                <label className="popup-checkbox-label">
                  <input
                    type="checkbox"
                    name="updates"
                    checked={formData.updates}
                    onChange={handleChange}
                    className="popup-checkbox"
                  />
                  <span className="popup-checkbox-custom"></span>
                  Yes, I would like to receive updates & promotions from Techton Lifespaces
                </label>
              </div>

              <button type="submit" className="popup-submit-btn">
                <span className="popup-btn-text">Submit</span>
                <div className="popup-btn-overlay"></div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupForm;