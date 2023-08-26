import React, { useState, useEffect } from "react";
// import DesktopBanner from '../../../assets/desktop 2.png';
// import MobileBanner from '../../../assets/online_doctor.png';
import Playstore from '../../../assets/playstore.png';
import Appstore from '../../../assets/appstore.png'
import './down.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const Banner = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const isMobile = windowWidth <= 768; 

    return (
        <div className="down col-lg-12 col-md-12" style={{display:"flex" }}>
<div className=" col-12 col-lg-12">
<div className="d-flex justify-content-center justify-content-lg-end align-items-center h-50">
        <div className="buttons_store d-flex flex-row align-items-lg-end">
            <button className="button_down_image button_one"><img src={Appstore} alt="App Store" /></button>
            <button className="button_down_image"><img src={Playstore} alt="Play Store" /></button>
        </div>
    </div>
</div>
    </div>
    

    );
}

export default Banner;