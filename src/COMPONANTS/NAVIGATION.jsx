import React, { useState } from 'react';
import './navigation.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaSearch } from "react-icons/fa";
import LOGOWWWW from '../assets/IMGS/Head&Nav/LOGOOO.svg';
import { Navbar, Nav as BootstrapNav, Container } from 'react-bootstrap';

const NAVIGATION = () => { 
  console.log("Nav component loaded"); // للتأكد من تحميل الملف
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expand="lg" expanded={expanded} className="navbar-custom">
      <Container fluid>
        <Navbar.Brand href="#home" className="header-section">
          <img
            src={LOGOWWWW}
            className="logo"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <BootstrapNav className="mx-auto">
            <BootstrapNav.Link href="/" onClick={() => setExpanded(false)}>Home</BootstrapNav.Link>
            <BootstrapNav.Link href="/about" onClick={() => setExpanded(false)}>About Us</BootstrapNav.Link>
            <BootstrapNav.Link href="/services" onClick={() => setExpanded(false)}>Services</BootstrapNav.Link>
            <BootstrapNav.Link href="/contact" onClick={() => setExpanded(false)}>Contact Us</BootstrapNav.Link>
          </BootstrapNav>
          <div className="search-icon">
            <FaSearch className='FaSearch' />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NAVIGATION;