import React from 'react';
import './footer.css'; // خلي بالك من حروف الكابيتال والسمول في اسم الملف
import logo from '../assets/IMGS/Head&Nav/logo (1) 2 (1).svg'; // تعديل المسار للوجو الصحيح
import { FaEnvelope } from "react-icons/fa";
import { IoCall } from "react-icons/io5";


const Footer = () => {
  return (
    <footer className="footer mt-auto py-3">
      <div className="container FGR">
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <img src={logo} alt="Saudi Antitermitum Company" className="footer-logo" />
            <p>Lorem ipsum dolor sit amet consectetur, et turpis nisl pharetra eu eleifend cursus amet non, eget neque dui quam sed ut nisi.</p>
            <p>   <FaEnvelope />   info@saudiantitermitum.com</p>
            <p>   <IoCall />   0564440164</p>
          </div>
          <div className="col-md-4 col-sm-12">
            <h3>Quick Links</h3>
            <ul className="list-unstyled">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Services</a></li>
              <li><a href="#">Our Team</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-md-4 col-sm-12">
            <h3>Popular Service</h3>
            <ul className="list-unstyled">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Services</a></li>
              <li><a href="#">Our Team</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
