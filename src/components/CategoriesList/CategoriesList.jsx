import React from 'react';
import './CategoriesList.scss';
import CategoryCard from '../CategoryCard/CategoryCard';

const CategoriesList = () => {
  return (
    <section className="categories-list">
      <h3 className='title'>Categorias</h3>
      <div className="list">
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
      </div>
    </section>
  );
};

export default CategoriesList;
