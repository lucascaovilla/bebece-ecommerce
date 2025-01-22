import React from 'react';
import './CategoryCard.scss';

const CategoryCard = ({ image, title }) => {
  return (
    <section className="category-card">
      <picture className="image">
        <img src={image} alt="Categoria" />
      </picture>
      <h5>{title}</h5>
    </section>
  );
};

export default CategoryCard;
