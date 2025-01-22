import React from 'react';
import './CategoryCard.scss';

const CategoryCard = ({ image }) => {
  return (
    <section className="category-card">
      <figure className="image">
        <img src={image} alt="Categoria" />
      </figure>
    </section>
  );
};

export default CategoryCard;
