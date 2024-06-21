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

function Team() {
  return (
    <div className="team">
      <div className="circle-top"></div>
      <div className="circle-bottom"></div>
      <header>
        <div className="header-content">
          <span>Company Management</span>
          <h1>Meet a team of experts and innovators who are pioneers in their field</h1>
        </div>
      </header>
      <section>
        <div className="card-top">
          <div className="card">
            <img src={PranjalYadav} alt="Pranjalsir" />
            <h2>Pranjal Yadav</h2>
            <p>Founder and Chief Operations Officer</p>
          </div>
          <div className="card">
            <img src={SmritiYadav} alt="John Smith" />
            <h2>Smriti Yadav</h2>
            <p>Founder and Chief Executive Officer</p>
          </div>
        </div>
        <div className="card">
          <img src={AnjaliJain} alt="Erik Longman" />
          <h2>Anjali Jain</h2>
          <p>Chief Process and Innovation Officer</p>
        </div>
        <div className="card">
          <img src={ManojJain} alt="Matthew Foster" />
          <h2>Manoj Jain</h2>
          <p>Chief Sales Officer</p>
        </div>
        <div className="card">
s          <img src="https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Artur Dichter" />
          <h2>Artur Dichter</h2>
          <p>Chief Financial Officer</p>
        </div>
        
        
        
      </section>
      <section className="bottom-row">
        <div className="scrolling-wrapper">
          {/* Team members in the scrolling row */}
          <div className="team-member">
            <img src={keshav} alt="keshav" />
            <h2>Keshav Sharma</h2>
          </div>
          <div className="team-member">
            <img src={IlishaTomer} alt="ilisha" />
            <h2>Ilisha Tomer</h2>
          </div>
          <div className="team-member">
            <img src={MaazAhmedFarooqui} alt="maaz" />
            <h2>Maaz Ahmed</h2>
          </div>
          <div className="team-member">
            <img src={AyushiSinha} alt="Ayushi" />
            <h2>Ayushi Sinha</h2>
          </div>
          <div className="team-member">
            <img src={NishchalSingh} alt="nishal" />
            <h2>Nishchal Singh</h2>
          </div>
          <div className="team-member">
            <img src={SajalJain} alt="" />
            <h2>SajalJain</h2>
          </div>
          <div className="team-member">
            <img src={SanskarChauhan} alt="sanskar" />
            <h2>Sanskar Chauhan</h2>
          </div>

          {/* Repeat for each team member */}
        </div>
      </section>
    </div>
  );
}

export default Team;
