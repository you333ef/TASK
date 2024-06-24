import React from 'react';
import './nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoSearch } from "react-icons/io5";
import LOGO from '../assets/IMGS/Head&Nav/logo (1) 2.svg';

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light MEMS">
      <div className="container-fluid">
        <div className='d-flex w-100 align-items-center'>
          <div className='col-lg-3 d-flex align-items-center'>
            <img src={LOGO} className="navbar-brand logo" alt="Logo" />
          </div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse col-lg-6" id="navbarNavDropdown">
            <ul className="navbar-nav UUl d-flex justify-content-around w-100">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className='col-lg-3 d-none d-lg-flex align-items-center justify-content-end END'>
            <IoSearch className='search-icon' />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
