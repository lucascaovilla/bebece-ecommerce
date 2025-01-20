import React from 'react';
import './ButtonComponent.scss';

const ButtonComponent = ({ children, onClick, type = 'button', disabled = false }) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className="button-component"
  >
    {children}
  </button>
);

export default ButtonComponent;
