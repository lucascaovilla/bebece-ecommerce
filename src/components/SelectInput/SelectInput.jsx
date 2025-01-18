import React, { forwardRef, useState } from 'react';
import './SelectInput.scss';

const SelectInput = forwardRef(({
  label,
  name,
  options = [],
  value = '',
  required = false,
  onChange = () => {},
}, ref) => {
  const [selectedValue, setSelectedValue] = useState(value);

  const handleSelectChange = (e) => {
    const { value: newValue } = e.target;
    setSelectedValue(newValue);
    onChange(e);
  };

  return (
    <div className="select-input">
      {label && <label htmlFor={name}>{label}</label>}
      <div className="select">
        <select
          id={name}
          ref={ref}
          name={name}
          value={selectedValue}
          onChange={handleSelectChange}
          required={required}
        >
          <option value="" disabled>
            Select an option
          </option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
});

export default SelectInput;
