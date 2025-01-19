import React, { useState, useEffect, useCallback } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ZipCodeModal from '../../components/ZipCodeModal/ZipCodeModal';
import useUserLocation from '../../hooks/useUserLocation';

const Layout = () => {
  const [isModalVisible, setModalVisible] = useState(false);
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

  return (
    <div>
      <Header onChangeLocation={() => setModalVisible(true)} />
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
    </div>
  );
};

export default Layout;
