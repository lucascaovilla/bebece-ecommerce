import React from 'react';
import './CartProductCard.scss';

const CartProductCard = ({ product, onChangeQuantity, onRemove }) => {
  const handleIncrease = () => onChangeQuantity(+product.quantity + 1);
  const handleDecrease = () => {
    if (+product.quantity > 1) {
      onChangeQuantity(+product.quantity - 1);
    }
  };


  const truncateText = (text) => {
    const maxLength = 40;

    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

  const adjustsValue = (value) => {
    if (value % 1 !== 0) {
      return value.toFixed(2);
    }
    return value;
  };
  
  return (
    <div className="cart-product-card">
      <div className="cart-product-card__content">
        <picture className="image">
          <img src={product.product.image} alt={product.product.name} />
        </picture>
        <div className="info">
          <h5>{truncateText(product.product.name)}</h5>

          <p className="size">Tamanho: {product.size}</p>
          <p className="value">R$ {adjustsValue(product.product.price.amount * product.quantity)}</p>
        </div>
      </div>
      <div className="cart-product-card__control">
        <div className="quantity-control">
          <button
            className={`decrease ${product.quantity === 1 ? 'disabled' : ''}`}
            onClick={handleDecrease}
            disabled={product.quantity === 1}
          >
            -
          </button>
          <span>{product.quantity}</span>
          <button className="increase" onClick={handleIncrease}>
            +
          </button>
        </div>
        <button className="remove-product" onClick={() => onRemove(product.product.id)}>
          Remover
        </button>
      </div>
    </div>
  );
};

export default CartProductCard;
