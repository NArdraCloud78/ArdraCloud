import React from 'react';
import ardralogonav from '../Assist/navbarLogo.png';
import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
      <div className='card'>
        
        </div>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={ardralogonav} alt="Logo" width="100" height="60" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Product
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Energy Management</a></li>
                  <div className='d-flex' >
                  <li><a className="dropdown-item" href="#">ardraEMS </a> </li>
                  <li> <a className="dropdown-item" href="#">ardraPROBE</a> </li>
                  </div>
                  <li><a className="dropdown-item" href="#">EnergyGPT</a></li>
                  <li><a className="dropdown-item" href="#">ArdraAI</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pricing
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Resources
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  ArdraAI
                </a>
              </li>
            </ul>
            <div className="ms-auto lastitem d-flex">
              <Link className="nav-link me-5 signin" to="https://app.ardracloud.com/">
                Sign In
              </Link>
              <Link className="nav-link book me-5 " to="#">
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
