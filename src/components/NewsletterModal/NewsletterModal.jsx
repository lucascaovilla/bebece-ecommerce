import React, { useState, useEffect } from 'react';
import './NewsletterModal.scss';
import FormComponent from '../FormComponent/FormComponent';
import TextInput from '../TextInput/TextInput';
import useEmail from '../../hooks/useEmail';

const NewsletterModal = () => {
  const [emailInput, setEmailInput] = useState('');
  const [emailSet, setEmailState] = useState(false);
  const { getEmail, setNewsletterEmail } = useEmail();
  const isMobile = window.matchMedia('(max-width: 768px)').matches;

  useEffect(() => {
    const email = getEmail();
    if (email) {
      setEmailState(true);
    }
  }, [getEmail]);

  const handleSubmit = () => {
    if (emailInput) {
      setNewsletterEmail(emailInput);
      setEmailState(true);
    }
  };

  const handleCopyCoupon = () => {
    const coupon = 'BEMVINDA';
    navigator.clipboard.writeText(coupon).then(() => {
      alert('Cupom copiado para a área de transferência!');
    });
  };

  return (
    <div className="newsletter-modal">
      {!emailSet ? (
        <div className="newsletter-form">
          <h3>Cadastre-se e receba <strong>10% OFF</strong> na sua primeira compra!</h3>
          <FormComponent onSubmit={handleSubmit} buttonLabel="Enviar" flex={!isMobile}>
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
  );
};

export default NewsletterModal;
