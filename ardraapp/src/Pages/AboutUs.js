import React from 'react';
import Team from '../Component/Team';
import './AboutUs.css';

function AboutUs() {
  return (
    <>
    <div className="about-us-header">
      <div className="intro-section">
        <span>Welcome to Ardra.ai</span>
        <h3>Join the future of energy with Ardra AI - Your partner in sustainable innovation.</h3>
      </div>

      <div className="about-section">
        <h2>About Us</h2>
        
        <p>
          Ardra AI was started as a developer project in 2022. We were frustated by how difficult it was to build modern data pipelines that worked well across energy industry.
          In November 2023, we launched a fully managed SaaS platform for facilities and utilities in the US market and joined Upekkha Accelerator's winter batch for US GTM. We're creating something special here, and we're excieted to build it with you.
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
