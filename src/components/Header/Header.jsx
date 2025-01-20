import React, { useState, useEffect } from 'react';
import ZipCodeStrip from '../ZipCodeStrip/ZipCodeStrip';
import { Menu, Search, Person, ShoppingBag } from '@mui/icons-material';
import './Header.scss';
import MenuComponent from '../MenuComponent/MenuComponent';

const useScroll = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
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

const Header = ({ onChangeLocation }) => {
  const scrolled = useScroll();
  const [isMenuVisible, setMenuVisible] = useState(false);

  const onOpenMenu = () => {
    setMenuVisible(true);
  };

  const onCloseMenu = () => {
    setMenuVisible(false);
  };

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <ZipCodeStrip onChangeLocation={onChangeLocation} />
        <section className="header__content">
          <nav>
            <Menu className="icon" onClick={onOpenMenu} />
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
      <MenuComponent isVisible={isMenuVisible} onClose={onCloseMenu} />
    </>
  );
};

export default Header;
