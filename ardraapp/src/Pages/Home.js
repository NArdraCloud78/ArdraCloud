import React from 'react'
import './Home.css'
import   star from'../Assist/homeassist/star.png'
import badge from '../Assist/homeassist/Badge.png'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    <div className='headline mb-2 ' >
      <img   width={80} src={star}   height={50}  ></img>
        <p > Manage Your Energy with ArdraAI:Unveiling <br></br>
          Insights, Empowering Decisions</p>

    </div>  
    <div  className='homebadge mb-3' >
    <img  src={badge}  width={200} height={100} ></img>
    </div> 
    

    <div  className='bookdemo mb-3 ' >
      <Link> Book a demo         
      </Link>

    </div>     

    {/* for demo */}
    


    </>
  )
}

export default Home
