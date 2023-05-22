import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function AutoSlider() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,  // enable auto slide
      autoplaySpeed: 1500,  // duration between auto slides in milliseconds
    };
  
    return (
      <Slider {...settings}>
        <div> 
          <img src="https://conversestore.vn/wp-content/uploads/2021/07/z2647671391884_0b98febd92e957af3beefa4995c2a0d5-0x600.jpg" alt="Slide 1" height="500px" width="100%"/>
        </div>
        <div>
          <img src="https://conversestore.vn/wp-content/uploads/2021/07/z2647667246444_03a29a47931b47a54d30fc20a6e74b4c-0x600.jpg" alt="Slide 2" width="100%" height="500px"/>
        </div>
        
      </Slider>
    );
  }
  export default AutoSlider;