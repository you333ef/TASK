import React from 'react';
import './ourvalues.css';
import KAWKAP from '../assets/IMGS/VALUES/KAWKAP (2).svg';
import BOX from '../assets/IMGS/VALUES/BOX.svg';
import LAMP from '../assets/IMGS/VALUES/LAMP (2).svg';
import TYiTLE from '../assets/IMGS/VALUES/Frame 486.svg';

const OURVALUES = () => {
  return (
    <div className="OURVALUES">
      <img src={TYiTLE} alt="" className='TYiTLE  d-block mx-auto ' />
      <div className="d-flex justify-content-center align-items-center">
        <div className="row KOLELTATATA">
          <div className="col-lg-3 col-sm-12" id='KAWKAP'>
            <img src={KAWKAP} alt="#" className='kawkab-img'/>
          </div>
          <div className="col-lg-3 col-sm-12" id='BOX'>
            <img src={BOX} alt="#" className='box-img'/>
          </div>
          <div className="col-lg-3 col-sm-12" id='LAMP'>
            <img src={LAMP} alt="#" className='lamp-img'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OURVALUES;
