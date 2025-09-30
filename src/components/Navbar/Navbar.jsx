import React, { useState, useEffect } from 'react';
import './Navbar.css';
import whatsappicon from '../../assets/whatsappicon.svg'
import msgicon from '../../assets/msgicon.svg'
import callicon from '../../assets/callicon.svg'
import logo from '../../assets/logo.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Check if screen is mobile
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    checkScreenSize();

    // Add event listener
    window.addEventListener('resize', checkScreenSize);

    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const navItems = [
    'Overview',
    'Configuration',
    'Amenities',
    'Gallery',
    'Location'
  ];

  const bottomActions = [
    { label: 'Call Us', icon: callicon, action: 'tel:+1234567890' },
    { label: 'Enquiry Now', icon: msgicon, action: '#enquiry' },
    { label: 'WhatsApp', icon: whatsappicon, action: 'https://wa.me/1234567890' }
  ];

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          {/* Logo */}
          <div className="nav-logo">
            <span className="logo-text"><a href="#Home"><img  className='navbarlogo-img'   src={logo} alt="" /></a></span>
          </div>

          {/* Navigation Items */}
          <ul className={`nav-menu ${isMenuOpen ? 'nav-menu-active' : ''}`}>
            {navItems.map((item, index) => (
              <li key={index} className="nav-item">
                <a href={`#${item.toLowerCase()}`} className="nav-link">
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button - Desktop */}
          <div className="nav-cta">
            <button className="brochure-btn">
              Get Brochure
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="mobile-menu-btn" onClick={toggleMenu}>
            <span className={`hamburger-line ${isMenuOpen ? 'line-1-active' : ''}`}></span>
            <span className={`hamburger-line ${isMenuOpen ? 'line-2-active' : ''}`}></span>
            <span className={`hamburger-line ${isMenuOpen ? 'line-3-active' : ''}`}></span>
          </div>
        </div>
      </nav>

      {/* Fixed Mobile Brochure Button */}
      {isMobile && (
        <div className="mobile-fixed-brochure">
          <button className="vertical-brochure-btn">
            <span className="btn-text">Get Brochure</span>
          </button>
        </div>
      )}

      {/* Fixed Bottom Mobile Actions */}
      {isMobile && (
        <div className="mobile-bottom-actions">
          {bottomActions.map((action, index) => (
            <a 
              key={index}
              href={action.action} 
              className="bottom-action-btn"
            >
              <img src={action.icon} className="action-icon" alt="" />
              <span className="action-label">{action.label}</span>
            </a>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;