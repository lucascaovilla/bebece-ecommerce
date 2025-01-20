import React, { useState, useEffect, useRef } from 'react';
import './MenuComponent.scss';
import { Close, KeyboardArrowDown, KeyboardArrowRight } from '@mui/icons-material';

const MenuComponent = ({ isVisible, onClose }) => {
  const [activeCategory, setActiveCategory] = useState(null);
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
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


  const toggleCategory = (categoryIndex) => {
    setActiveCategory((prevCategory) => (prevCategory === categoryIndex ? null : categoryIndex));
  };

  if (!isVisible) return null;

  return (
    <section className='menu-component'>
      <div className="menu" ref={menuRef}>
        <div className='menu__header'>
          <img
            className="logo"
            src={`${process.env.PUBLIC_URL}/static/images/Logo.svg`}
            alt="Logo"
          />
          <div className="close" onClick={onClose}>
            <Close className="icon" />
          </div>
        </div>
        <figure className='menu__banner'>
          <img
            src={`${process.env.PUBLIC_URL}/static/images/menu/banner.png`}
            alt="Banner"
          />
          <nav>
            <h5>Celebration - 20 anos</h5>
            <a>Conheça</a>
          </nav>
        </figure>
        <div className="menu__content">
          <h5>Liquida</h5>
          <ul className='categories-list'>
            {['Sapatos', 'Sapatos', 'Sapatos'].map((category, index) => (
              <li key={index} className='category'>
                <h5 onClick={() => toggleCategory(index)}>
                  {category}
                  {activeCategory !== index && (<KeyboardArrowRight />)}
                  {activeCategory === index && (<KeyboardArrowDown />)}
                </h5>
                {activeCategory === index && (
                  <ul className='products-list'>
                    {['Scarpins', 'Scarpins', 'Scarpins', 'Scarpins'].map((product, idx) => (
                      <li key={idx} className='product'>
                        <a>{product}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MenuComponent;
