import React from 'react';
import './ZipCodeStrip.scss';
import useUserLocation from '../../hooks/useUserLocation';

const ZipCodeStrip = ({ onChangeLocation }) => {
  const { userLocation } = useUserLocation();

  if (!userLocation.city) return null;

  return (
    <section className="zip-code-strip">
      <p>Você está em <strong>{userLocation.city || 'Selecione sua localização'}</strong></p>
      <button onClick={onChangeLocation}>Alterar</button>
    </section>
  );
};

export default ZipCodeStrip;
