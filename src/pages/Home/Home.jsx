import React from 'react';
import './Home.scss';
import Banner from '../../components/Banner/Banner';
import ProductsList from '../../components/ProductsList/ProductsList';
import NewsletterModal from '../../components/NewsletterModal/NewsletterModal';
import SliderComponent from '../../components/SliderComponent/SliderComponent';

const Home = ({ onOpenCart }) => {
  return (
    <section className="home">
      <SliderComponent>
        <Banner image="/static/images/banner/banner-1.png" />
        <Banner image="/static/images/banner/banner-2.png" />
        <Banner image="/static/images/banner/banner-3.png" />
      </SliderComponent>
      <ProductsList onOpenCart={onOpenCart} />
      <NewsletterModal />
    </section>
  );
};

export default Home;
