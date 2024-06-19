import React from 'react'
import './contact.css'
import logo from '../Assist/navbarLogo.png'

function ContactUs() {
  return (
    <>
    <div className='contact' >
         <div className='card' > 
           </div>
      
    </div>
<div>
<img  height={100} width={150} src={logo} ></img>
</div>

<div className='contacthead' >
    <h1>  ContactUs </h1> 
    <h5> Have any question? we'd love to hear from you </h5>
</div>
<div className='contactinfo' > 
<div className="card" style={{width: '15rem'}}>
  <div className="card-body">
    <h5 className="card-title">Support</h5>
   
    <p className="card-text">Our support team is ready to give you answers fast.</p>
    <a href="#" className="card-link  viewsupport">View support page</a><br></br>
    <a href="#" className="card-link">Submit a request</a>
  </div>
</div>

<div className="card" style={{width: '15rem'}}>
  <div className="card-body">
    <h5 className="card-title">Sales</h5>
    
    <p className="card-text">Get in touch with our sales team to see how we work together</p>
    <a href="#" className="card-link viewsupport">Contact sales </a> <br></br>
    <a href="#" className="card-link">Submit a request </a>
  </div>
</div>
</div>

</>
  )
}

export default ContactUs
