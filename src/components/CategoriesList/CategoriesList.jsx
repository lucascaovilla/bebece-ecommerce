import React from 'react';
import './CategoriesList.scss';
import CategoryCard from '../CategoryCard/CategoryCard';

const CategoriesList = () => {
  return (
    <section className="categories-list">
      <h3 className='title'>Categorias</h3>
      <div className="list">
        <CategoryCard image="/static/images/categories/category-1.png" />
        <CategoryCard image="/static/images/categories/category-2.png" />
        <CategoryCard image="/static/images/categories/category-3.png" />
        <CategoryCard image="/static/images/categories/category-4.png" />
      </div>
    </section>
  );
};

export default CategoriesList;
