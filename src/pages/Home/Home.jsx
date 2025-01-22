import React from 'react';
import './Home.scss';
import Banner from '../../components/Banner/Banner';
import ProductsList from '../../components/ProductsList/ProductsList';
import NewsletterModal from '../../components/NewsletterModal/NewsletterModal';
import SliderComponent from '../../components/SliderComponent/SliderComponent';
import CategoriesList from '../../components/CategoriesList/CategoriesList';

const Home = ({ onOpenCart }) => {
  return (
    <section className="home">
      <SliderComponent autoplay={true} >
        <Banner image="/static/images/banners/banner-1.png" />
        <Banner image="/static/images/banners/banner-2.png" />
        <Banner image="/static/images/banners/banner-3.png" />
      </SliderComponent>
      <CategoriesList />
      <figure className="navigation-banner">
        <img src="/static/images/navigation-banners/navigation-banner-small.png" />
      </figure>
      <figure className="navigation-banner">
        <img src="/static/images/navigation-banners/navigation-banner-big.png" />
      </figure>
      <ProductsList onOpenCart={onOpenCart} />
      <NewsletterModal />
    </section>
  );
};

export default Home;
