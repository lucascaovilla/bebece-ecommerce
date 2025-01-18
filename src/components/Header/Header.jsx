import React, { useState } from 'react';
import ZipCodeStrip from '../ZipCodeStrip/ZipCodeStrip';
import ZipCodeModal from '../ZipCodeModal/ZipCodeModal';
import { Menu, Search, Person, ShoppingBag } from '@mui/icons-material';
import './Header.scss';

const useScroll = () => {
  const [scrolled, setScrolled] = useState(false);

  React.useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 0);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrolled;
};

const Header = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const scrolled = useScroll();

  const onOpenModal = () => {
    setModalVisible(true);
  };

  const onCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <ZipCodeStrip onChangeLocation={onOpenModal} />
        <section className="header__content">
          <nav>
            <Menu className="icon" />
            <Search className="icon" />
          </nav>
          <img
            className="logo"
            src={`${process.env.PUBLIC_URL}/static/images/Logo.svg`}
            alt="Logo"
          />
          <nav>
            <Person className="icon" />
            <ShoppingBag className="icon" />
          </nav>
        </section>
      </header>
      {isModalVisible && <ZipCodeModal isVisible={isModalVisible} onClose={onCloseModal} />}
    </>
  );
};

export default Header;
