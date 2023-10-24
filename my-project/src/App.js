import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Nav';
import Hero from './Hero';
import ListOfCards from './ListOfCards';
import Footer from './footer';


function App() {
  const [cities, setCities] = useState([]);


  return (
    <div className="App">
      <Navbar/>
      <Hero 
        specifyCities = {setCities}
      />

      {console.log(cities)}

      <ListOfCards 
      cities = {cities}
      />

      <Footer/>
      
    </div>

  );
}

export default App;
