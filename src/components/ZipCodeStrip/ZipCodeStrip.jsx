import React from 'react';
import './ZipCodeStrip.scss';

const zipCodeLocale = 'São Paulo';

const ZipCodeStrip = ({ onChangeLocation }) => {
  return (
    <section className="zip-code-strip">
      <p>
        Você está em <strong>{zipCodeLocale}</strong>
      </p>
      <button onClick={onChangeLocation}>Alterar</button>
    </section>
  );
};

export default ZipCodeStrip;
