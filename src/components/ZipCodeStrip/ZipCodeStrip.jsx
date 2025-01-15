import React from 'react';
import './ZipCodeStrip.scss';

const zipCodeLocale = 'São Paulo'

const ZipCodeStrip = () => {
  return (
    <section className="zip-code-strip">
      <p>Você está em <strong>{zipCodeLocale}</strong></p>
      <button>Alterar</button>
    </section>
  );
};

export default ZipCodeStrip;
