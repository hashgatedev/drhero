import React from "react";
import Header from './components/header/header'
import Banner1 from './components/Banner1/banner'
import Banner2 from './components/Banner2/banner'
import Banner4 from './components/banner4/banner'
import Banner5 from './components/banner5/down'
import Footer from './components/footer/footer'
import Banner6 from './components//Banner6/banner'
import Slider from './components/Slider/slider'


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