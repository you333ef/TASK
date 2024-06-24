import React from 'react';
import './contactUUS.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MAP from '../assets/IMGS/MISSION/MAP.svg';

const CONTACTUS = () => {
  return (
    <div>
      <div className="container CONCER">
<div className="row">
  <div className="col-lg-6 col-sm-12">
  <form className=''>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" placeholder="Name" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" placeholder="Email" />
        </div>
        <div className="mb-3">
          <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
          <input type="text" className="form-control" id="phoneNumber" placeholder="Phone Number" />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <input type="text" className="form-control" id="message" placeholder="Message" />
        </div>
      </form>
  </div>
  <div className="col-lg-6 col-sm-12" id='leftMission'>    
    
    <img src={MAP} alt="" id='MAP' />
   
  </div>


</div>
      </div>
    </div>
  );
}

export default CONTACTUS;
