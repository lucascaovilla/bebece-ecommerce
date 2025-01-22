import React, { useState, useEffect } from 'react';
import ZipCodeStrip from '../ZipCodeStrip/ZipCodeStrip';
import { Menu, Search, Person, ShoppingBag, KeyboardArrowDownOutlined } from '@mui/icons-material';
import './Header.scss';
import MenuComponent from '../MenuComponent/MenuComponent';
import useCart from '../../hooks/useCart';

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

const Header = ({ onChangeLocation, onOpenCart }) => {
  const scrolled = useScroll();
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(null); 
  const { cartLength } = useCart();
  const isMobile = window.matchMedia('(max-width: 768px)').matches;

  useEffect(() => {
    setMenuVisible(activeSection === 'products');
  }, [activeSection]);

  const onOpenMenu = () => {
    setMenuVisible(true);
  };

  const onCloseMenu = () => {
    setMenuVisible(false);
  };

  const onSelectSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <>
      <header className={`header ${scrolled || (!isMobile && isMenuVisible) ? 'scrolled' : ''}`}>
        <ZipCodeStrip onChangeLocation={onChangeLocation} />
        <section className="header__content">
          {isMobile &&
            <nav>
              <Menu className="icon" onClick={onOpenMenu} />
              <Search className="icon" />
            </nav>
          }
          <img
            className="logo"
            src={`${process.env.PUBLIC_URL}/static/images/Logo.svg`}
            alt="Logo"
          />
          {!isMobile &&
            <nav className="menu-sections">
              <p
                className={activeSection === 'products' ? 'active' : ''}
                onClick={() => onSelectSection('products')}
              >
                Produtos
                <KeyboardArrowDownOutlined />
              </p>
              <p
                className={activeSection === 'releases' ? 'active' : ''}
                onClick={() => onSelectSection('releases')}
              >Lançamentos</p>
              <p className={`'red' ${activeSection === 'outlet' ? 'active' : ''}`}
                onClick={() => onSelectSection('outlet')}
              >Outlet</p>
            </nav>
          }
          <nav>
            {!isMobile && <Search />}
            <Person className="icon" />
            <p>
              <ShoppingBag className="icon" onClick={onOpenCart} />
              {cartLength > 0 && <span>{cartLength}</span>}
            </p>
          </nav>
        </section>
      </header>
      <MenuComponent isVisible={isMenuVisible} onClose={onCloseMenu} />
    </>
  );
};

export default Header;
