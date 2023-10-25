import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Nav';
import Hero from './Hero';
import ListOfCards from './ListOfCards';
import Footer from './footer';
import {BrowserRouter as Router ,Routes , Route } from 'react-router-dom'
import Contact from './Contact';
import About from './About';

function App() {
  const [cities, setCities] = useState([]);


  return (
    <div className="App">
      
      <Router>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Hero
            specifyCities = {setCities}/>}>  </Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/cards' element={<ListOfCards cities = {cities}/>}></Route>
          </Routes>
      </Router>

      
      
      
      
      
      
      
      
      
      
      {/* <Navbar/>
      <Hero 
        specifyCities = {setCities}
      />

      {console.log(cities)}

      <ListOfCards 
      cities = {cities}
      /> */}

      <Footer/>
      
    </div>

  );
}

export default App;
