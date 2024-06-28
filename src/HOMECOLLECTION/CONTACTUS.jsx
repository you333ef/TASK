import React from 'react';
import './contactUUS.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MAP from '../assets/IMGS/MISSION/MAP.svg';
import CoNtACt from '../assets/IMGS/VALUES/CoNtACt.svg'

const CONTACTUS = () => {
  return (
    <div>
      <div className=" CONCER">
        <img src={CoNtACt} alt="" className='d-block m-auto  mb-5' />
<div className="row  KOLLOCONTACCT mt-5">
  <div className="col-lg-6 col-sm-12" id='LABLES'>
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
  <div className="col-lg-5 col-sm-12" id='leftContact'>   
     
    <img src={MAP} alt="" id='MAPP' />
  </div>


</div>
      </div>
    </div>
  );
}

export default CONTACTUS;
