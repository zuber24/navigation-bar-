import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route, BrowserRouter  } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';

function App() {
  return (
    <div>
    <BrowserRouter>
 
          <Navbar/>
              <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/about" element={<About/>}/>
                <Route exact path="/contact" element={<Contact/>}/>
                <Route exact path="/login" element={<Login/>}/>
              </Routes>
    </BrowserRouter>
      
    </div>
    
  );
}

export default App;
