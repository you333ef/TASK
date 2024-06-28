import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Nav from './COMPONANTS/Nav';
import Home from './COMPONANTS/Home';
import About from './COMPONANTS/About';
import NavOther from './COMPONANTS/NavOther'; // استبدل Nav2 بـ NavOther
import Services from './COMPONANTS/Services';
import Contact from './COMPONANTS/Contact';
import Footer from './COMPONANTS/Footer';

const App = () => {
  const location = useLocation(); // هنستخدمها عشان نعرف احنا في أنهي صفحة دلوقتي

  return (
    <>
      {location.pathname === '/' ? <Nav /> : <NavOther />}
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
