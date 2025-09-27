import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Configurations from './components/Configurations/Configurations';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <About />
      <Configurations />
      <main className="main-content">
        {/* Your other sections will go here */}
      </main>
    </div>
  );
}

export default App;