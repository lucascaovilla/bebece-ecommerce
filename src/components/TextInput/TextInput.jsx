import React, { forwardRef, useState } from 'react';
import './TextInput.scss';

const TextInput = forwardRef(({
  label,
  name,
  regex,
  value = '',
  placeholder = '',
  required = false,
  onChange = () => {},
}, ref) => {
  const [inputValue, setInputValue] = useState(value);

  const handleInput = (e) => {
    const { value: newValue } = e.target;

    if (!regex || regex.test(newValue)) {
      setInputValue(newValue);
      onChange(e);
    }
  };

  return (
    <div className="text-input">
      {label && <label htmlFor={name}>{label}</label>}
      <div className="input">
        <input
          id={name}
          ref={ref}
          name={name}
          value={inputValue}
          placeholder={placeholder}
          onInput={handleInput}
          required={required}
          pattern={regex?.source}
        />
      </div>
    </div>
  );
});

export default TextInput;
