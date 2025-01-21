import React from 'react';
import Slider from "react-slick";
import './SliderComponent.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderComponent = ({ children }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings} className='slider-component'>
      {children}
    </Slider>
  );
};

export default SliderComponent;