import React from 'react';
import './Home.css';
import heroImage from '../assets/hero-image.jpg';

const Home = () => {
  return (
    <div className="home">
      <img src={heroImage} alt="Hero" className="hero-image" />
      <div className="hero-text">
        <h1>SAVEETHA ENGINEERING COLLEGE</h1>
        <p>Be The Best</p>
      </div>
    </div>
  );
};

export default Home;