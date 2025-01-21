import React from 'react';
import './Banner.scss';

const Banner = ({image}) => {
  return (
    <figure className="banner">
      <img src={image} alt="Banner" />
      <div className="discover">
        <p>Conheça agora!</p>
      </div>
    </figure>
  );
};

export default Banner;
