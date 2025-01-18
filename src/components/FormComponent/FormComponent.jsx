import React, { useRef, useState } from 'react';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import './FormComponent.scss';

const FormComponent = ({ onSubmit, children, buttonLabel }) => {
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
    <form ref={formRef} onInput={validateForm} onSubmit={handleSubmit}>
      {children}
      <ButtonComponent label={buttonLabel} buttonType="submit" disabled={!isValid} onClick={handleSubmit}/>
    </form>
  );
};

export default FormComponent;
