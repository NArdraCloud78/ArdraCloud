import React from 'react';
import './Team.css';
import IlishaTomer from '../Assist/team/ilisha.png'
import SanskarChauhan from '../Assist/team/Sanskar.png'
import AyushiSinha from '../Assist/team/Ayushi.png'
import NishchalSingh from '../Assist/team/Nishchal.png'
import SajalJain from '../Assist/team/Sajal.png'
import MaazAhmedFarooqui from '../Assist/team/Maaz.png'
import PranjalYadav from '../Assist/team/Pranjal.png'
import SmritiYadav from '../Assist/team/Smriti.png'
import ManojJain from '../Assist/team/manoj.png'
import AnjaliJain from '../Assist/team/Anjali.png'
import keshav from '../Assist/team/Kashev.png'
import Diwakar from '../Assist/team/Diwakar.png'
import Neha from '../Assist/team/Neha.png'
import Pranay from '../Assist/team/Pranay.png'
import Nikita from '../Assist/team/Nikita.png'


function Team() {
  return (
    <div className="team">
      
      <div className="circle-bottom"></div>
      <header>
        <div className="header-content">
          <span>Founding team</span>
          <p>We are a team of Engineers, Data scientists, Urban Architects and Enegy auditors</p>
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
            <h6>Keshav</h6>
          </div>
          <div className="team-member">
            <img src={IlishaTomer} alt="ilisha" />
            <h6>Ilisha</h6>
          </div>
          <div className="team-member">
            <img src={MaazAhmedFarooqui} alt="maaz" />
            <h6>Maaz</h6>
          </div>
          <div className="team-member">
            <img src={AyushiSinha} alt="Ayushi" />
            <h6>Ayushi</h6>
          </div>
          <div className="team-member">
            <img src={NishchalSingh} alt="nishal" />
            <h6>Nishchal</h6>
          </div>
          <div className="team-member">
            <img src={SajalJain} alt="" />
            <h6>Sajal</h6>
          </div>
          <div className="team-member">
            <img src={SanskarChauhan} alt="sanskar" />
            <h6>Sanskar</h6>
          </div>
          <div className="team-member">
            <img src={Nikita} alt="Nikita" />
            <h6>Nikita</h6>
          </div>

          {/* Repeat for each team member */}
        </div>
      </section>
    </div>
  );
}

export default Team;
