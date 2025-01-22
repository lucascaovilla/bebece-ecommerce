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
    <div className="banner">
      <picture>
        {desktopImage && <source srcSet={desktopImage} media="(min-width: 769px)" />}
        <img
          src={mobileImage}
          alt={alt || 'Banner'}
        />
      </picture>
    </div>
  );
};

export default Banner;
