import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image1 from '../../../assets/dr1.png'
import Image2 from '../../../assets/dr2.png'
import Image3 from '../../../assets/dr3.png'
import './slider.css'

const SliderComponent = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1600, // Large Desktop
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200, // Desktop
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992, // Laptop and small desktop
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // Tablet
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576, // Mobile
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // Mobile
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 420, // Mobile
        settings: {
          slidesToShow: 2,
        },
      },
     
      
    ],
  };

  return (
    <div className="slide">
      <center className="why"><span style={{fontWeight:"BOLD",color:"#034c81"}}>Why Dr.Hero?</span></center>
    <div className="slider-container" >
      <Slider {...settings}>
        <div className="slick-slide">
          <img className="slider-image" src={Image1} alt="Image 1" />
          <center  className="text_sli"><span className="slider_text" style={{color:"#034c81"}}>Get Help Within <br></br> 15 Minutes</span></center>
        </div>
        <div className="slick-slide">
          <img className="slider-image" src={Image3} alt="Image 2" />
          <center className="text_sli"><span className="slider_text" style={{color:"#034c81"}}>Affordable Treatment<br></br> For Everyone</span></center>
          
        </div>
        <div className="slick-slide">
          <img className="slider-image" src={Image2} alt="Image 3" />
          <center  className="text_sli"><span className="slider_text" style={{color:"#034c81"}}>Fast delivery<br></br>of medicine</span></center>
        </div>
      </Slider>
    </div>
    </div>
  );
};

export default SliderComponent;
