import React from 'react';
import { BrowserRouter as Router, Routes,Route,} from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar';
import Home from './Pages/Home';
import ContactUs from './Pages/ContactUs';
import Footer from './Component/Footer';



function App() {
  return (

    <div>


       {/* <ContactUs/> */}

      
      
       <Router>
        <Navbar/>
         <Routes> 
          <Route  path='/' element={<Home/>}  >
            <Route path='/contact' element={<ContactUs/>} ></Route>
          
          </Route>
         </Routes>
         <Footer/> 
      </Router> 

    </div>
  )
}

export default App
