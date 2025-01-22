import React from 'react';
import './CategoriesList.scss';
import CategoryCard from '../CategoryCard/CategoryCard';
import SliderComponent from '../SliderComponent/SliderComponent';

const CategoriesList = () => {
  return (
    <section className="categories-list">
      <h3 className='title'>Categorias</h3>
      <div className="list">
        <SliderComponent slides={3} topDots={true} >
          <CategoryCard
            image="/static/images/categories/category-1.png"
            title="Botas"
          />
          <CategoryCard
            image="/static/images/categories/category-2.png"
            title="Scarpins"
          />
          <CategoryCard
            image="/static/images/categories/category-3.png"
            title="Sapatilhas"
          />
          <CategoryCard
            image="/static/images/categories/category-4.png"
            title="Sandálias"
          />
        </SliderComponent>
      </div>
    </section>
  );
};

export default CategoriesList;
