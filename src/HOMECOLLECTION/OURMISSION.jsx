import React from 'react';
import './ourmission.css';
import MAP from '../assets/IMGS/MISSION/MAP.svg';
import FRAME from '../assets/IMGS/MISSION/Frame 483.svg'
import Vactor from '../assets/IMGS/MISSION/Vector 6.svg'
const OURMISSION = () => {
  return (
  <div className='container LOL'>
    <div className="row">
    <div className="col-lg-6 col-sm-12" id='leftMission'>    
      <img src={MAP} alt="" id='MAP' />
     
    </div>
        <div className="col-lg-6 col-sm-12 rightMission">
<div className="">
<img src={FRAME} alt="##" id='FRAME' />
<h4 id='access'>We <span className='focus'>focus</span>on improving<br />access to medicines for both <br /> <span className='HCPs'>HCPs & Patients</span> at the right<br /> time at the right standard</h4>
<small id='small'>To all HCPs who are seeking for community healthier life, we are committed to delivering the highest pharmaceutical solutions through our standardized supply chain system to build sustainable partnerships by ensuring that the right pharmaceutical solutions are accessible & available at the right time.</small>
<img src={Vactor} alt="Vactor"  id='Vactor'/>





</div>

        </div>
      </div>
    </div>
  );
}

export default OURMISSION;
