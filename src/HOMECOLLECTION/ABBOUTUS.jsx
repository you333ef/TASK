import React from 'react';
import './aboutUUs.css'
import DOCTORS from '../assets/IMGS/ABOUTUS/Group 1.svg'
import TOP from '../assets/IMGS/ABOUTUS/Frame 485.svg'
import something from '../assets/IMGS/ABOUTUS/Frame 454.svg'

const ABBOUTUS = () => {
  return (
    <div className='about-us-container'>
      <img src={TOP} alt="" className='d-block mx-auto mt-5 ooo'/>
      <h3 className='text-center mt-2 txt'>
        We are committed to delivering <br /> 
        pharmaceutical solutions for all <br /> 
        our <span>HCP partners</span>
      </h3>
      <img src={DOCTORS} className='DOCTORS' alt="#" />
      <div className='ground'>
        <img src={something} alt="" className='something d-block mx-auto mt-2' />
        <button className='read-more-button'>Read More</button>
      </div>
    </div>
  );
}

export default ABBOUTUS;
