    import React from 'react';
    import './ourvision.css';
    import TITLE from '../assets/IMGS/OURVISION/TITLE.svg';
    import imgdown from '../assets/IMGS/OURVISION/Frame.png';
    import lineunder from '../assets/IMGS/OURVISION/line-under-btn.svg';
    const OURVISION = () => {
    return (
        <div className="container VISion">
        <div className="row flexvision">
        <div className="col-lg-7 col-sm-12 col-md-12 order-sm-2" id="leftCorner">
    <img src={imgdown} className="imgdown mt-5" alt="" />
                    </div>
    <div className="col-lg-5 col-sm-12 col-md-12 order-sm-1" >
    <img src={TITLE} alt="" className="center-img " id="TITLE" />
    <div className="rightreturn">
    <h3 className="Aligning">Aligning with the Kingdom <br />2030 vision</h3>
    <h5 className="aiming">we are aiming to be one of the top 5 pharmaceutical <br /> suppliers with advanced technology & fully digitalized <br /> supply chain.</h5>
    <button className="More center-img">Read More</button>
    <img src={lineunder} alt="" className="center-img" id="lineunder" />
    </div>
    </div>
    </div>
    </div>
    
    );
    };

    export default OURVISION;
