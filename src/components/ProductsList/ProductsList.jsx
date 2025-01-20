import React, { useState, useEffect } from 'react';
import './ProductsList.scss';
import ProductCard from '../ProductCard/ProductCard';
import { getProducts } from '../../utils';
import './ProductsList.scss';

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((fetchedProducts) => {
      setProducts(fetchedProducts);
    });
  }, []);

  return (
    <div className="products-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
