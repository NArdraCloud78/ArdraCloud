import React from 'react';
import './Team.css';
import IlishaTomer from '../Assist/team/ilisha.jpg'
import SanskarChauhan from '../Assist/team/Sanskar.JPEG'
import AyushiSinha from '../Assist/team/Ayushi.jpeg'
import NishchalSingh from '../Assist/team/Nishchal.png'
import SajalJain from '../Assist/team/Sajal.jpeg'
import MaazAhmedFarooqui from '../Assist/team/Maaz.jpeg'
import PranjalYadav from '../Assist/team/Pranjal.jpeg'
import SmritiYadav from '../Assist/team/Smriti.jpeg'
import ManojJain from '../Assist/team/manoj.jpeg'
import AnjaliJain from '../Assist/team/Anjali.jpeg'
import keshav from '../Assist/team/kashev.jpg'
import Diwakar from '../Assist/team/Diwakar.jpeg'
import Neha from '../Assist/team/Neha.jpeg'
import Pranay from '../Assist/team/Pranay.jpeg'


function Team() {
  return (
    <div className="team">
      <div className="circle-top"></div>
      <div className="circle-bottom"></div>
      <header>
        <div className="header-content">
          <span>Founding team</span>
          <h1>We are a team of Engineers, Data scientists, Architects and Enegy auditors</h1>
        </div>
      </header>
      <section>
        <div className="card-top">
          <div className="card">
            <img src={PranjalYadav} alt="Pranjalsir" />
            <h2>Pranjal Yadav</h2>
            <p>2X Founder, AI expert and Chief Executive Officer</p>
          </div>
          <div className="card">
            <img src={SmritiYadav} alt="Smriti Yadav" />
            <h2>Smriti Yadav</h2>
            <p>Co-Founder and Chief Design Officer</p>
          </div>
        </div>
        <div className="card">
          <img src={AnjaliJain} alt="Anjali Jain" />
          <h2>Anjali Jain</h2>
          <p>Head of Energy Audits</p>
        </div>
        <div className="card">
          <img src={ManojJain} alt="Manoj Jain" />
          <h2>Manoj Jain</h2>
          <p>Head of Finance</p>
        </div>
        <div className="card">
         <img src={Pranay} alt="Pranay Dhoot" />
          <h2>Pranay Dhoot</h2>
          <p>Head of Data Science, MS Germany</p>
        </div>

        <div className="card">
          <img src={Neha} alt="Neha Rani" />
          <h2>Neha</h2>
          <p>SDE 2</p>
        </div>

        <div className="card">
        <img src={Diwakar} alt="Diwakar Dubey" />
          <h2>Diwakar</h2>
          <p>SDE 1</p>
        </div>
        
        
        
      </section>
      <section className="bottom-row">
        <div className="scrolling-wrapper">
          {/* Team members in the scrolling row */}
          <div className="team-member">
            <img src={keshav} alt="keshav" />
            <h2>Keshav</h2>
          </div>
          <div className="team-member">
            <img src={IlishaTomer} alt="ilisha" />
            <h2>Ilisha</h2>
          </div>
          <div className="team-member">
            <img src={MaazAhmedFarooqui} alt="maaz" />
            <h2>Maaz</h2>
          </div>
          <div className="team-member">
            <img src={AyushiSinha} alt="Ayushi" />
            <h2>Ayushi</h2>
          </div>
          <div className="team-member">
            <img src={NishchalSingh} alt="nishal" />
            <h2>Nishchal</h2>
          </div>
          <div className="team-member">
            <img src={SajalJain} alt="" />
            <h2>Sajal</h2>
          </div>
          <div className="team-member">
            <img src={SanskarChauhan} alt="sanskar" />
            <h2>Sanskar</h2>
          </div>

          {/* Repeat for each team member */}
        </div>
      </section>
    </div>
  );
}

export default Team;
