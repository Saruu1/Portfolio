import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Components/HomePage';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
function App() {
  return (
    <>
        <Navbar/>
           <Routes>
              <Route exact path='/'  element={<HomePage/>}/>
              <Route exact path='/about' element={<About/>}/>
              <Route exact path='/projects' element={<Projects/>}/>
              <Route exact path='/contact' element={<Contact/>}/>
          </Routes>
    </>
   
  );
}

export default App;
