import React, { useState, useEffect, useRef } from 'react';
import TextInput from '../TextInput/TextInput';
import SelectInput from '../SelectInput/SelectInput';
import FormComponent from '../FormComponent/FormComponent';
import './ZipCodeModal.scss';
import { Close } from '@mui/icons-material';
import useUserLocation from '../../hooks/useUserLocation';

const zipCodeRegex = /^[0-9]{0,5}(-?[0-9]{0,3})?$/;


const states = [
  { value: '', label: 'Opcional' },
  { value: 'sp', label: 'São Paulo' },
  { value: 'mg', label: 'Minas Gerais' },
  { value: 'pr', label: 'Paraná' },
  { value: 'rs', label: 'Rio Grande do Sul' },
  { value: 'sc', label: 'Santa Catarina' },
  { value: 'go', label: 'Goiás' },
  { value: 'mt', label: 'Mato Grosso' },
  { value: 'ms', label: 'Mato Grosso do Sul' },
  { value: 'ba', label: 'Bahia' },
  { value: 'se', label: 'Sergipe' },
  { value: 'rn', label: 'Rio Grande do Norte' },
  { value: 'rr', label: 'Roraima' },
  { value: 'ro', label: 'Rondônia' },
  { value: 'ap', label: 'Amapá' },
  { value: 'am', label: 'Amazonas' },
  { value: 'rj', label: 'Rio de Janeiro' },
  { value: 'es', label: 'Espírito Santo' },
  { value: 'ma', label: 'Maranhão' },
  { value: 'to', label: 'Tocantins' },
  { value: 'pa', label: 'Pará' },
  { value: 'ce', label: 'Ceará' },
  { value: 'pe', label: 'Pernambuco' },
  { value: 'al', label: 'Alagoas' },
  { value: 'pb', label: 'Paraíba' },
  { value: 'df', label: 'Distrito Federal' },
];

const ZipCodeModal = ({ isVisible, onClose }) => {
  const { userLocation, saveLocation } = useUserLocation();
  const [zipCode, setZipCode] = useState(userLocation.zipCode || '');
  const [city, setCity] = useState(userLocation.city || '');
  const [state, setState] = useState(userLocation.state || '');
  const modalRef = useRef();

  useEffect(() => {
    setZipCode(userLocation.zipCode || '');
    setCity(userLocation.city || '');
    setState(userLocation.state || '');
  }, [userLocation]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    if (isVisible || !userLocation) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isVisible, onClose, userLocation]);

  const handleSubmit = async (data) => {
    if (!zipCodeRegex.test(data.zipCode)) {
      alert('Por favor, insira um código postal válido.');
      return;
    }

    await saveLocation(data.zipCode);
    onClose();
  };

  if (!isVisible) return null;

  return (
    <article className="zip-code-modal">
      <div className="modal" ref={modalRef}>
        <div className="close" onClick={onClose}>
          <Close className="icon" />
        </div>
        <h3>Personalize sua experiência e encontre produtos perto de você!</h3>
        <FormComponent onSubmit={handleSubmit} buttonLabel="Salvar endereço">
          <TextInput
            label="Código postal*"
            name="zipCode"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            regex={zipCodeRegex}
            placeholder="00000-000"
            required
          />
          <section>
            <TextInput
              label="Cidade"
              name="city"
              value={city}
              placeholder="Opcional"
              readOnly
            />
            <SelectInput
              label="Estado"
              name="state"
              value={state}
              onChange={(selected) => setState(selected.value)}
              options={states}
              isDisabled
            />
          </section>
        </FormComponent>
      </div>
    </article>
  );
};

export default ZipCodeModal;
