import React from 'react';
import './Banner.scss';

const Banner = ({ mobileImage, desktopImage, alt }) => {
  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  const isDesktop = window.matchMedia('(min-width: 769px)').matches;

  if (
    (isMobile && !mobileImage) ||
    (isDesktop && !desktopImage)
  ) {
    return null;
  }

  return (
    <picture className="banner">
      {desktopImage && <source srcSet={desktopImage} media="(min-width: 769px)" />}
      <img
        src={mobileImage}
        alt={alt || 'Banner'}
      />
      <div className="discover">
        <p>Conheça agora!</p>
      </div>
    </picture>
  );
};

export default Banner;
