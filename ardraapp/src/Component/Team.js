import React from 'react';
import './Team.css';
import ilisha from '../Assist/team/ilisha.jpg'

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
            <img src="https://images.pexels.com/photos/2811089/pexels-photo-2811089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Alexandra Smith" />
            <h2>Alexandra Smith</h2>
            <p>Founder and Chief Operations Officer</p>
          </div>
          <div className="card">
            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="John Smith" />
            <h2>John Smith</h2>
            <p>Founder and Chief Executive Officer</p>
          </div>
        </div>
        <div className="card">
          <img src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Erik Longman" />
          <h2>Erik Longman</h2>
          <p>Chief Process and Innovation Officer</p>
        </div>
        <div className="card">
          <img src="https://images.pexels.com/photos/2216607/pexels-photo-2216607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Matthew Foster" />
          <h2>Matthew Foster</h2>
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
            <img src={ilisha} alt="Ilisha" />
            <h2>Ilisha Tomar</h2>
          </div>
          <div className="team-member">
            <img src="" alt="" />
            <h2></h2>
          </div>
          <div className="team-member">
            <img src="" alt="" />
            <h2></h2>
          </div>
          <div className="team-member">
            <img src="" alt="" />
            <h2></h2>
          </div>
          <div className="team-member">
            <img src="" alt="" />
            <h2></h2>
          </div>
          <div className="team-member">
            <img src="" alt="" />
            <h2></h2>
          </div>
          <div className="team-member">
            <img src="" alt="" />
            <h2></h2>
          </div>

          {/* Repeat for each team member */}
        </div>
      </section>
    </div>
  );
}

export default Team;
