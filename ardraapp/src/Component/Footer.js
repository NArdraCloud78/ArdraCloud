import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Footer.css';
import footerLogo from '../Assist/navbarLogo.png';

function Footer() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');

  const handleSubscribe = async () => {
    if (!email || !firstName) {
      alert('Please enter your first name and email address.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/subscribe', {
        email,
        firstName
      });

      if (response.status === 200) {
        toast.success('Subscription successful');
        setEmail('');
        setFirstName('');
      } else {
        toast.error('Subscription failed');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred. Please try again later.');
    }
  };

  return (
    <footer>
      <ToastContainer />
      <div className="footer-container">
        <div className="footer-column">
          <img src={footerLogo} alt="Company Logo" height={100} width={150} />
          <p>We are committed to delivering the best service and quality.</p>
        </div>
        <div className="footer-column">
          <h5>Products</h5>
          <ul>
            <li><a href="#">EMS</a></li>
            <li><a href="#">PROBE</a></li>
            <li><a href="#">GenAI</a></li>
            <li><a href="#">Resources</a></li>
            <li><a href="#">Partners</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h5>Company</h5>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Blogs</a></li>
            <li><a href="#">Career</a></li>
            <li><a href="#">Team</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h5>Contact Us</h5>
          <div className="subscribe">
            <input
              type="text"
              placeholder="Enter your first name"
              aria-label="First name for subscription"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Enter your email"
              aria-label="Email for subscription"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="button" onClick={handleSubscribe}>Subscribe</button>
          </div>
        </div>
        <div className="footer-column bottom">
          <h5>Follow Us</h5>
          <div className="social-media">
            <a href="https://www.facebook.com/ardracloud" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com/ArdraAi" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
            <a href="https://www.linkedin.com/company/14632013/admin/feed/posts/" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://www.instagram.com/ardra.ai/" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Ardra AI Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
