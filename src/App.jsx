import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Configurations from './components/Configurations/Configurations';
import Amenities from './components/Amenities/Amenities';
import Testimonials from './components/Testimonials/Testimonials';
import Location from './components/Location/Location';
import Self from './components/self/Self';
import Contact from './components/Contact/Contact';
import PopupForm from './components/PopupForm/PopupForm';
import './App.css';

/**
 * Main application component that renders the primary structure of the website.
 * @returns {JSX.Element} The main app layout with all sections.
 */
function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <About />
      <Configurations />
      <Amenities />
      <Testimonials />
      <Location />
      <Self />
      <Contact />
      <PopupForm />
    </div>
  );
}

export default App;