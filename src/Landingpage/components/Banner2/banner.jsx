import React, { useState, useEffect } from "react";
import DesktopBanner from '../../../assets/Group 6095@3x.png';
import MobileBanner from '../../../assets/Group 6120@3x.png';
import './banner.css';

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

    const isMobile = windowWidth <= 768; // Adjust this breakpoint as needed

    return (
        <div className="banner">
            <img src={isMobile ? MobileBanner : DesktopBanner} alt="Banner" />
        </div>
    );
}

export default Banner;
