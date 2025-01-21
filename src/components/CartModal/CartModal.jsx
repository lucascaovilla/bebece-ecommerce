import React, { useMemo, useEffect, useState, useRef } from 'react';
import './CartModal.scss';
import { Close } from '@mui/icons-material';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import CartProductCard from '../CartProductCard/CartProductCard';
import useCart from '../../hooks/useCart';

const CartModal = ({ isVisible, onClose }) => {
  const { cartedItems, updateQuantity, removeFromCart, clearCart, retrieveCartItems } = useCart();
  const [cartProducts, setCartProducts] = useState([]);
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    if (isVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isVisible, onClose]);

  useEffect(() => {
    const fetchCartItems = async () => {
      const cartItems = await retrieveCartItems();
      setCartProducts(cartItems);
    };

    fetchCartItems();
  }, [cartedItems, retrieveCartItems]);

  const subtotal = useMemo(() => 
    cartProducts.reduce((sum, product) => sum + product.product.price.amount * product.quantity, 0),
    [cartProducts]
  );

  const discounts = useMemo(() => {
    return cartProducts.reduce(
      (sum, product) => 
        product.product.price.isDiscount ? sum + (product.product.price.amount * product.quantity * 0.1) : sum,
      0
    );
  }, [cartProducts]);

  const total = subtotal - discounts;

  const handleCheckout = () => {
    clearCart();
  };

  return (
    <section className="cart-modal">
      <div className="cart" ref={modalRef}>
        <div className="cart__header">
          <p>Carrinho</p>
          <div className="close" onClick={onClose}>
            <Close className="icon" />
          </div>
        </div>
        <div className="cart__content">
          {cartProducts.length > 0 ? (
            cartProducts.map((product) => (
              <CartProductCard
                key={product.id}
                product={product}
                onChangeQuantity={(quantity) => updateQuantity(product.id, product.size, quantity)}
                onRemove={() => removeFromCart(product.id, product.size)}
              />
            ))
          ) : (
            <p className="empty-cart">Seu carrinho está vazio.</p>
          )}
        </div>
        <div className="cart__control">
          <div className="value">
            <p className="subtotal">
              Subtotal <span>R$ {subtotal.toFixed(2)}</span>
            </p>
            <p className="discounts">
              Descontos <span>- R$ {discounts.toFixed(2)}</span>
            </p>
            <p className="total">
              Total <span>R$ {total.toFixed(2)}</span>
            </p>
          </div>
          <ButtonComponent onClick={handleCheckout}>
            Finalizar pedido
          </ButtonComponent>
          <button className="back-to-shopping" type="button" onClick={onClose}>
            Continuar comprando
          </button>
        </div>
      </div>
    </section>
  );
};

export default CartModal;
