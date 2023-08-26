import React from "react";
import Header from '../components/arabic/header/header'
import Banner1 from '../components/arabic/Banner1/banner'
import Banner2 from '../components/arabic/Banner2/banner'
import Banner4 from '../components/arabic/banner4/banner'
import Banner5 from '../components/arabic/banner5/down'
import Footer from '../components/arabic/footer/footer'
import Banner6 from '../components/arabic/Banner6/banner'
import Slider from '../components/arabic/Slider/slider'


const Home = () =>{
    return(
  <>
  <Header/>
  <Banner1/>
  <Banner2/>
  <Slider/>
  <Banner4 />
  <Banner5 />
  <Banner6/>
  <Footer/>
 
  </>
    )
}

export default Home;