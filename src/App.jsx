import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Configurations from './components/Configurations/Configurations';
import Amenities from './components/Amenities/Amenities';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <About />
      <Configurations />
      <Amenities />
    
    </div>
  );
}

export default App;