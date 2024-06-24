import React from 'react';
import './services.css';
import adress from '../assets/IMGS/OURSERVICES/Frame 473.png';
import UnderTopLine from '../assets/IMGS/OURSERVICES/Vector 3 (1).png';
import carone from '../assets/IMGS/OURSERVICES/delivery-truck (2).svg';
import cartwo from '../assets/IMGS/OURSERVICES/fast-delivery.svg';
import hands from '../assets/IMGS/OURSERVICES/delivery.svg';
import shipped from '../assets/IMGS/OURSERVICES/shipped.svg';
import line from '../assets/IMGS/OURSERVICES/Line 1.png';
const Services = () => {
  return (
    <div className="container coco">
      <img src={adress} alt=""  className='d-block mx-auto mt-5 ' id='adress'/>
      <img src={UnderTopLine} alt="" className='d-block mx-auto mt-3 'id='UnderTopLine' />
<div className="row mt-5 COLLOW">
<div className="col-lg-3 col-sm-12 col-md-6 text-center " id='carone'>
  <img src={carone} alt=""  className='carone'/>
<p className='Efficient'>Efficient order fulfillment and dispatching.</p>
</div>
<div className="col-lg-3 col-sm-12 col-md-6 text-center" id='cartwo'>
<img src={cartwo} alt=""  className='cartwo'/>
<p>Timely and accurate delivery to wholesalers, pharmacies, hospitals, clinics, and other healthcare facilities.</p>
</div>
<div className="col-lg-3 col-sm-12 col-md-6 text-center" id='hands'>
<img src={hands} alt=""  className='hands'/>
<p>Specialized handling for fragile, hazardous, or temperature-sensitive products.</p>
</div>
<div className="col-lg-3 col-sm-12 col-md-6   text-center " id='shipped'>
<img src={shipped} alt=""  className='shipped'/>
<p>Customized distribution solutions tailored to client requirements.</p>
</div>








</div>





    </div>
  );
}

export default Services;
