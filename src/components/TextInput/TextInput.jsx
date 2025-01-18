import React, { forwardRef, useState } from 'react';

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
  );
});

export default TextInput;
