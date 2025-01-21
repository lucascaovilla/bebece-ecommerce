import React, { useState, useEffect, useCallback } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ZipCodeModal from '../../components/ZipCodeModal/ZipCodeModal';
import useUserLocation from '../../hooks/useUserLocation';
import ProductsList from '../../components/ProductsList/ProductsList';
import CartModal from '../../components/CartModal/CartModal';

const Layout = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isCartVisible, setCartVisible] = useState(false);
  const { userLocation } = useUserLocation();

  const checkUserLocation = useCallback(() => {
    if (!userLocation) {
      setTimeout(checkUserLocation, 10);
    } else {
      setModalVisible(!userLocation?.zipCode);
    }
  }, [userLocation]);

  useEffect(() => {
    if (userLocation?.zipCode !== undefined) {
      checkUserLocation();
    }
  }, [userLocation, checkUserLocation]);

  useEffect(() => {
    if (isModalVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalVisible]);

  const onCloseModal = () => {
    setModalVisible(false);
  };
  
  const onOpenCart = () => {
    setCartVisible(true);
  };

  const onCloseCart = () => {
    setCartVisible(false);
  };

  return (
    <div>
      <Header onChangeLocation={() => setModalVisible(true)} onOpenCart={() => setCartVisible(true)} />
      <main>
      <Outlet />
        1
        2
        3
        4
        <Outlet />
        5
        <Outlet />
        6
        <Outlet />
        7
        <Outlet />
        8
        <Outlet />
        9
        <Outlet />
        10
        <Outlet />
        11
        <Outlet />
        <ProductsList onOpenCart={() => setCartVisible(true)} />
        12
        <Outlet />
        13
        <Outlet />
        14
        <Outlet />
        15
        <Outlet />
        16
        <Outlet />
        17
        <Outlet />
        18
        <Outlet />
        19
        <Outlet />
        20
        <Outlet />
        21
        <Outlet />
        22
        <Outlet />
        23
        <Outlet />
        24
        <Outlet />
      </main>
      <Footer />
      {isModalVisible && <ZipCodeModal isVisible={isModalVisible} onClose={onCloseModal} />}
      {isCartVisible && <CartModal isVisible={isCartVisible} onClose={onCloseCart} />}
    </div>
  );
};

export default Layout;
