import React, { useState } from 'react';
import Logo from "../../../assets/logo.png";
import "./header.css";
import appstore from '../../../assets/appstore.png'
import Playstore from '../../../assets/playstore.png'
import Getapp from '../../../assets/Group 6122.png'

const Header = () => {
  
  return (
    <div className="header-container" style={{ position: "sticky", top: "0", zIndex: "1000",background:"#fff" }}>
      <a hef="./"><img src={Logo} alt="Logo" className="logo" /></a>
      <div className="rightlogos">
        <img src={appstore} alt="App Store Logo" className="store" />
        <img src={Playstore} alt="Play Store Logo" className="store" />
        <button className="getapp" >GET APP</button>
      </div>
    </div>
  );
}

export default Header;
