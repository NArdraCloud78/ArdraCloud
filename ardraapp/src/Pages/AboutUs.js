import React from 'react';
import Team from '../Component/Team';
import './AboutUs.css';
import dataimage from '../Assist/aboutassist/dataimage.jpeg';

function AboutUs() {
  return (
    <div className="about-us-container">
        <div className="circle-top"></div>
      <header className="about-us-header">
        <div className="intro-section">
          
          <p>Join the future of energy with Ardra AI - Your partner in sustainable innovation.</p>
        </div>
        <div className="about-section">
          <h3>Our Story</h3>
          <p>
            Ardra AI started in 2022 as a grassroots project born from frustration with outdated data pipelines in the energy sector. By November 2023, we successfully launched a cutting-edge SaaS platform tailored for US facilities and utilities, marking our entry into the Upekkha Accelerator's winter batch for US market penetration. Today, we continue to pioneer transformative solutions and are thrilled to share our journey with you.
          </p>
        </div>
      </header>

      <section className="our-vision-section">
        <div className="vision-content">
          <h3>Our Vision</h3>
          <p>
            At Ardra AI, our vision is to cultivate a global powerhouse that drives technological innovation, ultimately enhancing the quality of life for the next billion people worldwide.
          </p>
        </div>
        {/* Uncomment below to add an image */}
        {/* <div className="vision-image">
          <img src={dataimage} alt="Data Analytics" />
        </div> */}
      </section>

      <section className="team-section">
        
        <Team />
      </section>
    </div>
  );
}

export default AboutUs;
