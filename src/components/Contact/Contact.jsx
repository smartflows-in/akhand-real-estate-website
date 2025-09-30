import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <span className="contact-subtitle">Connect With Us</span>
          <h2 className="contact-title">Get in touch with us</h2>
          <div className="contact-divider"></div>
        </div>

        <div className="contact-content">
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form-group">
                <label htmlFor="name" className="contact-form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="contact-form-input"
                  required
                />
                <div className="contact-input-underline"></div>
              </div>

              <div className="contact-form-group">
                <label htmlFor="email" className="contact-form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="contact-form-input"
                  required
                />
                <div className="contact-input-underline"></div>
              </div>

              <div className="contact-form-group">
                <label htmlFor="phone" className="contact-form-label">Phone no.</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="contact-form-input"
                  required
                />
                <div className="contact-input-underline"></div>
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
                  By submitting an enquiry, I authorize Techton Lifespaces to contact me via Call, SMS, WhatsApp, Emailer or any other relevant medium
                </label>
              </div>

              <button type="submit" className="contact-submit-btn">
                <span className="contact-btn-text">Get Project Details</span>
                <div className="contact-btn-overlay"></div>
              </button>
            </form>

         
          </div>

          <div className="contact-info">
            <div className="contact-info-card">
              <div className="contact-card-header"></div>
              <div className="contact-info-content">
                <h3 className="contact-info-title">Official Portal</h3>
                <p className="contact-info-text">
                  For more details visit the website:
                </p>
                <a 
                  href="https://maharera.mahaonline.gov.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="contact-official-link"
                >
                  https://maharera.mahaonline.gov.in
                </a>
                <div className="contact-gold-accent"></div>
              </div>
            </div>

            <div className="contact-copyright">
              <p>COPYRIGHT © 2025. Techton. ALL RIGHTS RESERVED.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;