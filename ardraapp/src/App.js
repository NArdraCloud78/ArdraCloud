import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar';
import Home from './Pages/Home';
import ContactUs from './Pages/ContactUs';
import Footer from './Component/Footer';
import Team from './Component/Team';
import AboutUs from './Pages/AboutUs';
import Career from './Pages/Career';

function App() {
  return (
    <div>
      {/* <Document/> */}
      
      {/* <Careers/> */}
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route  path='/career'  element={<Career/>} ></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
