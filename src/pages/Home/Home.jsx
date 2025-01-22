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
        <Banner image="/static/images/banner/banner-1.png" />
        <Banner image="/static/images/banner/banner-2.png" />
        <Banner image="/static/images/banner/banner-3.png" />
      </SliderComponent>
      <CategoriesList />
      <ProductsList onOpenCart={onOpenCart} />
      <NewsletterModal />
    </section>
  );
};

export default Home;
