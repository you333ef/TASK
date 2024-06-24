import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './COMPONANTS/Home';
import About from './COMPONANTS/About';
import Nav from './COMPONANTS/Nav';
import Services from './COMPONANTS/Services';
import Contact from './COMPONANTS/Contact';
import Footer from './COMPONANTS/Footer';
const App = () => {
  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/about" element={<Services />} />
      <Route path="/about" element={<Contact />} />
    </Routes>
<Footer/>
  </BrowserRouter>
  );
}

export default App;
