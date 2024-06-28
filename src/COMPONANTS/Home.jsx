import React from 'react';
import './home.css';
import HEAD from '../HOMECOLLECTION/HEAD';
import ABBOUTUS from '../HOMECOLLECTION/ABBOUTUS';
import Services from './Services';
import OURVISION from '../HOMECOLLECTION/OURVISION';
import OURMISSION from '../HOMECOLLECTION/OURMISSION';
import OURVALUES from '../HOMECOLLECTION/OURVALUES';
import CONTACTUS from '../HOMECOLLECTION/CONTACTUS';
const Home = () => {
  return (
    <div>
       
      <HEAD/>
      <ABBOUTUS/>
      <Services/>
      <OURVISION/>
      <OURMISSION/>
      <OURVALUES/>
      <CONTACTUS/>
      
    </div>
  );
}

export default Home;
