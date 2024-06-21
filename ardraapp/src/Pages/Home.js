import React from 'react';
import './Home.css';
// import star from '../Assist/homeassist/star.png';
// import badge from '../Assist/homeassist/Badge.png';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <div className='headline mb-2'>
        {/* <img width={80} height={50} src={star} alt="Star" /> */}
        <p>
          Manage Your Energy with ArdraAI: Unveiling
          <br />
          Insights, Empowering Decisions
        </p>
      </div>
      {/* <div className='homebadge mb-3'>
        <img width={200} height={100} src={badge} alt="Badge" />
      </div> */}
      <div className='bookdemo mb-3'>
        <Link to="/demo">Book a demo</Link>
      </div>
    </>
  );
}

export default Home;
