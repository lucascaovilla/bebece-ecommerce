import React from 'react';
import './ProductCard.scss';
import { FavoriteBorderOutlined, ShoppingBagOutlined } from '@mui/icons-material';

const ProductCard = ({ product, onOpenModal }) => {
  const { name, image, price, id, sizes } = product;

  return (
    <div className="product-card">
      <picture className='image'>
        <img
          src={image}
          alt={name}
        />
        <div className="favorites">
          <FavoriteBorderOutlined className='icon' />
        </div>
        <div className="add-to-cart" onClick={() => onOpenModal(product)}>
          <ShoppingBagOutlined className='icon' />
        </div>
        {price.isDiscount && (
          <span>{100 - Math.round((price.isDiscount / price.amount) * 100)}% OFF</span>
        )}
      </picture>
      <div className="product-info">
        <p className="product-name">{name}</p>
          {price.isDiscount ? (
            <p className="product-price">
              <span className="discounted-price">
                R$ {price.amount % 1 === 0 ? price.amount : price.amount.toFixed(2)}
              </span>
              <span className="price">
                R$ {price.isDiscount % 1 === 0 ? price.isDiscount : price.isDiscount.toFixed(2)}
              </span>
            </p>
          ) : (
            <p className="product-price">
              <span className="price">
                R$ {price.amount % 1 === 0 ? price.amount : price.amount.toFixed(2)}
              </span>
            </p>
          )}
      </div>
    </div>
  );
};

export default ProductCard;
