import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './COMPONANTS/Home';
import About from './COMPONANTS/About';
import Services from './COMPONANTS/Services';
import Contact from './COMPONANTS/Contact';
import Footer from './COMPONANTS/Footer';

const App = () => {
  return (
    <>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
