import React, { useState, useEffect, useRef } from 'react';
import './NewsletterModal.scss';
import FormComponent from '../FormComponent/FormComponent';
import TextInput from '../TextInput/TextInput';
import useEmail from '../../hooks/useEmail';

const NewsletterModal = ({ isVisible, onClose }) => {
  const [emailInput, setEmailInput] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const modalRef = useRef();
  const { setNewsletterEmail } = useEmail();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
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

  const handleSubmit = () => {
    if (emailInput) {
      setNewsletterEmail(emailInput);
      setIsSubmitted(true);
    }
  };

  const handleCopyCoupon = () => {
    const coupon = 'BEMVINDA';
    navigator.clipboard.writeText(coupon).then(() => {
      if(!alert('Cupom copiado para a área de transferência!')) {
        onClose();
      }
    });
  };

  return isVisible ? (
    <div className="newsletter-modal">
      <div className="newsletter" ref={modalRef}>
        {!isSubmitted ? (
          <div className="newsletter-form">
            <h3>Cadastre-se e receba <strong>10% OFF</strong> na sua primeira compra!</h3>
            <FormComponent onSubmit={handleSubmit} buttonLabel="Enviar">
              <TextInput
                name="email"
                type="email"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="Digite seu e-mail"
                required
              />
            </FormComponent>
          </div>
        ) : (
          <div className="submitted">
            <h3>Utilize o cupom abaixo e garanta seu desconto!</h3>
            <div className="coupon">
              <span>BEMVINDA</span>
              <button onClick={handleCopyCoupon}>Copiar</button>
            </div>
          </div>
        )}
      </div>
    </div>
  ) : null;
};

export default NewsletterModal;
