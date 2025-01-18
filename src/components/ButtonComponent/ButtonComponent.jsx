import React from 'react';
import './ButtonComponent.scss';

const ButtonComponent = ({ label, onClick, type = 'button', disabled = false }) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className="button-component"
  >
    {label}
  </button>
);

export default ButtonComponent;
