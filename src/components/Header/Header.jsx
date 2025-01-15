import React, { useState, useEffect } from 'react';
import { Search, Person, ShoppingBag, KeyboardArrowDown } from '@mui/icons-material';
import './Header.scss';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <img className="logo" src={`${process.env.PUBLIC_URL}/static/images/Logo.svg`} alt="Logo" />
      <nav>
        <section className="products">
          <h2>Produtos</h2>
          <KeyboardArrowDown size={12} className='icon' />
        </section>
        <h2>Lançamentos</h2>
        <h2 className="red">Outlet</h2>
      </nav>
      <section className="options">
        <Search size={24} className='icon' />
        <Person size={24} className='icon' />
        <ShoppingBag size={24} className='icon' />
      </section>
    </header>
  );
};

export default Header;
