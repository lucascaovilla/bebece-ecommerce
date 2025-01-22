import React from 'react';
import { useOutletContext } from 'react-router-dom';
import './Home.scss';
import Banner from '../../components/Banner/Banner';
import ProductsList from '../../components/ProductsList/ProductsList';
import NewsletterModal from '../../components/NewsletterModal/NewsletterModal';
import SliderComponent from '../../components/SliderComponent/SliderComponent';
import CategoriesList from '../../components/CategoriesList/CategoriesList';
import Blog from '../../components/Blog/Blog';

const Home = () => {
  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  const { onOpenCart } = useOutletContext();

  return (
    <section className="home">
      <SliderComponent autoplay={true} >
        <Banner
          mobileImage="/static/images/banners/mobile-banner-1.png"
          desktopImage="/static/images/banners/desktop-banner-1.png"
          alt="Banner 1"
        />
        <Banner
          mobileImage="/static/images/banners/mobile-banner-2.png"
          desktopImage="/static/images/banners/desktop-banner-2.png"
          alt="Banner 2"
        />
        {isMobile &&
          <Banner
            mobileImage="/static/images/banners/mobile-banner-3.png"
            alt="Banner 3"
          />
        }
      </SliderComponent>
      <CategoriesList />
      <div className="navigation-banners">
        <picture className="navigation-banner">
          <img
            src={isMobile ? "/static/images/navigation-banners/mobile-navigation-banner-1.png" : "/static/images/navigation-banners/desktop-navigation-banner-1.png"}
            alt="Navigation Banner"  
          />
        </picture>
        <picture className="navigation-banner">
          <img
            src={isMobile ? "/static/images/navigation-banners/mobile-navigation-banner-2.png" : "/static/images/navigation-banners/desktop-navigation-banner-2.png"}
            alt="Navigation Banner"  
          />
        </picture>
      </div>
      <ProductsList onOpenCart={onOpenCart} />
      <Blog />
      <NewsletterModal />
    </section>
  );
};

export default Home;
