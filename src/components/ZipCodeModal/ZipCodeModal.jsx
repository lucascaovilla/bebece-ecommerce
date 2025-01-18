import React, { useState, useEffect, useRef } from 'react';
import TextInput from '../TextInput/TextInput';
import SelectInput from '../SelectInput/SelectInput';
import FormComponent from '../FormComponent/FormComponent';
import './ZipCodeModal.scss';
import { Close } from '@mui/icons-material';

const zipCodeRegex = /^[0-9]{0,5}(-[0-9]{0,3})?$/;

const defaultSelect = { value: '', label: 'Opcional' };

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

const handleSubmit = (data) => {
  console.log('Form Submitted:', data);
};

const ZipCodeModal = ({ isVisible, onClose }) => {
  const modalRef = useRef();

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
            regex={zipCodeRegex}
            placeholder="00000-000"
            required
          />
          <section>
            <TextInput label="Cidade" name="city" placeholder="Opcional" />
            <SelectInput
              label="Estado"
              name="state"
              options={states}
              value={defaultSelect}
              required
            />
          </section>
        </FormComponent>
      </div>
    </article>
  );
};

export default ZipCodeModal;
