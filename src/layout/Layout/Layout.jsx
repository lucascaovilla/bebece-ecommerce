import React, { useState, useEffect, useCallback } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ZipCodeModal from '../../components/ZipCodeModal/ZipCodeModal';
import CartModal from '../../components/CartModal/CartModal';
import NewsletterModal from '../../components/NewsletterModal/NewsletterModal';
import useUserLocation from '../../hooks/useUserLocation';
import useEmail from '../../hooks/useEmail';
import ProductsList from '../../components/ProductsList/ProductsList';

const Layout = () => {
  const [isZipCodeModalVisible, setZipCodeModalVisible] = useState(false);
  const [isCartModalVisible, setCartModalVisible] = useState(false);
  const [isNewsletterModalVisible, setNewsletterModalVisible] = useState(false);

  const { userLocation } = useUserLocation();
  const { getEmail } = useEmail();

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
    const email = getEmail();
    console.log(email)
    if (!email) {
      setNewsletterModalVisible(true);
    } else {
      setNewsletterModalVisible(false);
    }
  }, [getEmail]);

  useEffect(() => {
    if (isZipCodeModalVisible || isNewsletterModalVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isZipCodeModalVisible, isNewsletterModalVisible]);

  const onCloseZipCodeModal = () => {
    setZipCodeModalVisible(false);
  };

  const onOpenCart = () => {
    setCartModalVisible(true);
  };

  const onCloseCart = () => {
    setCartModalVisible(false);
  };

  const onCloseNewsletterModal = () => {
    setNewsletterModalVisible(false);
  };

  return (
    <div>
      <Header onChangeLocation={() => setZipCodeModalVisible(true)} onOpenCart={onOpenCart} />
      <main>
        <Outlet />
        1
        <Outlet />
        2
        <Outlet />
        3
        <Outlet />
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
        <ProductsList onOpenCart={() => setCartModalVisible(true)} />
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
      {isNewsletterModalVisible && (<NewsletterModal isVisible={isNewsletterModalVisible} onClose={onCloseNewsletterModal} />)}
      {isZipCodeModalVisible && <ZipCodeModal isVisible={isZipCodeModalVisible} onClose={onCloseZipCodeModal} />}
      {isCartModalVisible && <CartModal isVisible={isCartModalVisible} onClose={onCloseCart} />}
    </div>
  );
};

export default Layout;
