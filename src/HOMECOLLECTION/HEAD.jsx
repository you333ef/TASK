import React from 'react';
import { IoBagAdd } from "react-icons/io5";
import { GiHoneyJar } from "react-icons/gi";
import './head.css';
import DRUGS from '../assets/IMGS/Head&Nav/Rectangle 9.svg';
import Doctor from '../assets/IMGS/Head&Nav/Rectangle 15.svg';
import KHAT from '../assets/IMGS/Head&Nav/Vector 4.svg'
import bag from '../assets/IMGS/Head&Nav/first-aid (1) 1.svg'

const HEAD = () => {
  return (
    <div className="HH ">  
      <div className="row">
        <div className="left col-lg-5 col-sm-12" id='left'>
          <h4 className='one'> <img src={bag} alt="" /> saudi antiserum company</h4>
          <h2 className='textHead one tto'>We <span className='Focus'>Focus</span> On improving</h2>
          <h2 className='textHead one tto'>access to medicines for both</h2>
          <h2 className='textHead one'><span className='HCPs'>HCPs & Patients</span> at the right</h2>
          <h2 className='textHead one'>time</h2>
          <button className='Read one'>Read More</button>
        </div>
        <div className="right col-lg-7 col-sm-12">
          <img src={DRUGS} alt="Drugs" className='DRUGS' />
          <img src={Doctor} alt="Doctor" className='Doctor' />
        </div>
      </div>
    </div>
  );
}

export default HEAD;
