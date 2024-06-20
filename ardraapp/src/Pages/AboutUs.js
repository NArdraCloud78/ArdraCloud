import React from 'react';
import Team from '../Component/Team';
import './AboutUs.css';

function AboutUs() {
  return (
    <>
    <div className="about-us-header">
      <div className="intro-section">
        <span>Welcome to Our Company</span>
        <h1>We are Innovators, Leaders, and Pioneers</h1>
      </div>

      <div className="about-section">
        <h2>About Us</h2>
        <p>
          We are a forward-thinking company dedicated to driving innovation in our field. Our team of experts is committed to excellence and delivering outstanding results.
        </p>
      </div>
      </div>

      <div className="team-section">
        
        <Team />
      </div>
    </>
  );
}

export default AboutUs;
