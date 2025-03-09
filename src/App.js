import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Card from './components/Card';
import Herosection from './components/Herosection';
import Box from './components/Box';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
    <Router>
    <Navbar />
      <Routes>
        <Route path="/home"/>
        <Route path="/contact"/>
        <Route path="/service"/>

        <Route path="/home"/>


        <Route path="/about"/>
      </Routes>
      <Slider/>
      <Card/>
      <Herosection/>
      <Box/>
      <Footer/>
      </Router>
    </>
  )
}

export default App;
