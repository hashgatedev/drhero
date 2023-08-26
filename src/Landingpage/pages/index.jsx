import React from "react";
import Header from '../components/header/header'
import Banner1 from '../components/Banner1/banner'
import Banner2 from '../components/Banner2/banner'
import Banner4 from '../components/banner4/banner'
import Banner5 from '../components/banner5/down'
import Footer from '../components/footer/footer'
import Banner6 from '../components//Banner6/banner'
import Slider from '../components/Slider/slider'


const Home = () =>{
    return(
  <div style={{
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
    maxWidth: "1920px",
    margin: "0 auto", // To center horizontally
  }}>
  <Header/>
  <Banner1/>
  <Banner2/>
  <Slider/>
  <Banner4 />
  <Banner5 />
  <Banner6/>
  <Footer/>
 
  </div>
    )
}

export default Home;