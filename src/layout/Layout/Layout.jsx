import React, { useState, useEffect, useCallback } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ZipCodeModal from '../../components/ZipCodeModal/ZipCodeModal';
import CartModal from '../../components/CartModal/CartModal';
import useUserLocation from '../../hooks/useUserLocation';

const Layout = () => {
  const [isZipCodeModalVisible, setZipCodeModalVisible] = useState(false);
  const [isCartModalVisible, setCartModalVisible] = useState(false);

  const { userLocation } = useUserLocation();

  const checkUserLocation = useCallback(() => {
    if (!userLocation) {
      setTimeout(checkUserLocation, 10);
    } else {
      setZipCodeModalVisible(!userLocation?.zipCode);
    }
  }, [userLocation]);

  useEffect(() => {
    if (userLocation?.zipCode !== undefined) {
      checkUserLocation();
    }
  }, [userLocation, checkUserLocation]);

  useEffect(() => {
    if (isZipCodeModalVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isZipCodeModalVisible]);

  const onCloseZipCodeModal = () => {
    setZipCodeModalVisible(false);
  };

  const onOpenCart = () => {
    setCartModalVisible(true);
  };

  const onCloseCart = () => {
    setCartModalVisible(false);
  };

  return (
    <div>
      <Header onChangeLocation={() => setZipCodeModalVisible(true)} onOpenCart={onOpenCart} />
      <main>
        <Outlet onOpenCart={() => setCartModalVisible(true)} />
      </main>
      <Footer />
      {isZipCodeModalVisible && <ZipCodeModal isVisible={isZipCodeModalVisible} onClose={onCloseZipCodeModal} />}
      {isCartModalVisible && <CartModal isVisible={isCartModalVisible} onClose={onCloseCart} />}
    </div>
  );
};

export default Layout;
