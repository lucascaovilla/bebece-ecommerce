import React from 'react';
import Slider from "react-slick";
import './SliderComponent.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderComponent = ({ children, slides = 1, autoplay = false, centerMode = false }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slides,
    slidesToScroll: 1,
    arrows: false,
    autoplay: autoplay,
    focusOnSelect: true,
    centerMode: centerMode,
  };

  return (
    <Slider {...settings} className='slider-component'>
      {children}
    </Slider>
  );
};

export default SliderComponent;