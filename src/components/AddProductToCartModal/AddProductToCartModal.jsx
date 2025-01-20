import React, { useEffect, useRef, useState } from 'react';
import './AddProductToCartModal.scss';
import { Close, ShoppingBagOutlined } from '@mui/icons-material';
import ButtonComponent from '../ButtonComponent/ButtonComponent';

const AddProductToCartModal = ({ isVisible, onClose, product }) => {
  const modalRef = useRef();
  const [selectedSize, setSelectedSize] = useState(null);

  useEffect(() => {
    if (product?.sizes?.length) {
      setSelectedSize(product.sizes[0]);
    }
  }, [product]);

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

  const addProductToCart = () => {
    if (selectedSize) {
      console.log(`Adding product to cart with size: ${selectedSize}`);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="add-product-to-cart-modal">
      <div className="modal" ref={modalRef}>
        <figure className="image">
          {product?.image && <img src={product.image} alt={product?.name} />}
          <div className="close" onClick={onClose}>
            <Close className="icon" />
          </div>
        </figure>
        <div className="content">
          <h4 className="product-name">{product?.name || "Produto sem nome"}</h4>
          <div className="size">
            <p>
              Tamanho: <span>{selectedSize || "Nenhum tamanho disponível"}</span>
            </p>
            <ul className="sizes-list">
              {[32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43].map((size) => (
                <li
                  key={size}
                  className={
                    product?.sizes?.includes(size)
                      ? size === selectedSize
                        ? "selected"
                        : ""
                      : "unavailable"
                  }
                  onClick={() =>
                    product?.sizes?.includes(size) && setSelectedSize(size)
                  }
                >
                  {size}
                </li>
              ))}
            </ul>
          </div>
          <ButtonComponent onClick={addProductToCart}>
            <div className="button-label">
              Adicionar ao carrinho
              <ShoppingBagOutlined />
            </div>
          </ButtonComponent>
        </div>
      </div>
    </div>
  );
};

export default AddProductToCartModal;
