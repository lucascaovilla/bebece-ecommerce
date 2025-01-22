import React, { useState, useEffect } from 'react';
import './ProductsList.scss';
import ProductCard from '../ProductCard/ProductCard';
import { getProducts } from '../../utils';
import './ProductsList.scss';
import SliderComponent from '../SliderComponent/SliderComponent'
import AddProductToCartModal from '../AddProductToCartModal/AddProductToCartModal';

const ProductsList = ({ onOpenCart }) => {
  const [products, setProducts] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [openProduct, setOpenProduct] = useState(null);
  const isMobile = window.matchMedia('(max-width: 768px)').matches;

  useEffect(() => {
    getProducts().then((fetchedProducts) => {
      setProducts(fetchedProducts);
    });
  }, []);

  const onOpenModal = (product) => {
    setOpenProduct(product);
    setModalVisible(true);
  };

  const onCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <div className="products-list">
      <SliderComponent slides={isMobile ? 1 : 5}  autoplay={true} topDots={true}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onOpenModal={(product) => onOpenModal(product)} />
        ))}
      </SliderComponent>
      <AddProductToCartModal isVisible={isModalVisible} onClose={onCloseModal} onOpenCart={() => {onOpenCart(); onCloseModal()}} product={openProduct} />
    </div>
  );
};

export default ProductsList;
