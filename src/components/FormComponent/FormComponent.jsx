import React, { useRef, useState } from 'react';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import './FormComponent.scss';

const FormComponent = ({ onSubmit, children, buttonLabel, flex = false }) => {
  const formRef = useRef();
  const [isValid, setIsValid] = useState(false);

  const validateForm = () => {
    if (formRef.current) {
      setIsValid(formRef.current.checkValidity());
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formRef.current && formRef.current.checkValidity()) {
      const formData = new FormData(formRef.current);
      const data = Object.fromEntries(formData.entries());
      onSubmit(data);
    }
  };

  return (
    <form ref={formRef} onInput={validateForm} onSubmit={handleSubmit} className={flex ? 'flex' : ''}>
      {children}
      <ButtonComponent buttonType="submit" disabled={!isValid} onClick={handleSubmit}>{buttonLabel}</ButtonComponent>
    </form>
  );
};

export default FormComponent;
