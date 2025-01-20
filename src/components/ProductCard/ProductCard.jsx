import React, { useState } from 'react';
import './ProductCard.scss';
import { FavoriteBorderOutlined, ShoppingBagOutlined } from '@mui/icons-material';
import AddProductToCartModal from '../AddProductToCartModal/AddProductToCartModal';

const ProductCard = ({ product }) => {
  const { name, image, price, id, sizes } = product;
  const [isModalVisible, setModalVisible] = useState(false);

  const onOpenModal = () => {
    setModalVisible(true);
  };

  const onCloseModal = () => {
    setModalVisible(false);
  };


  return (
    <div className="product-card">
      <figure className='image'>
        <img
          src={image}
          alt={name}
        />
        <div className="favorites">
          <FavoriteBorderOutlined className='icon' />
        </div>
        <div className="add-to-cart" onClick={onOpenModal}>
          <ShoppingBagOutlined className='icon' />
        </div>
        {price.isDiscount && (
          <span>{100 - Math.round((price.isDiscount / price.amount) * 100)}% OFF</span>
        )}
      </figure>
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
      <AddProductToCartModal isVisible={isModalVisible} onClose={onCloseModal} product={product} />
    </div>
  );
};

export default ProductCard;
