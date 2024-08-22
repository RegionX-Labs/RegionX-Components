// src/components/Input/Input.tsx
import React, { useState } from 'react';
import './Input.scss';

interface InputProps {
  label?: string;
  value?: string;
  placeholder?: string;
  disabled?: boolean; // Disabled state
  error?: boolean; // Error state for styling
  leftIcon?: React.ReactNode; // Left icon for the input
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // Change handler
  onFocus?: () => void; // Focus handler
  onBlur?: () => void; // Blur handler
}

const Input: React.FC<InputProps> = ({
  label,
  value,
  placeholder,
  disabled = false,
  error = false,
  leftIcon,
  onChange,
  onFocus,
  onBlur,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
    if (onFocus) {
      onFocus();
    }
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (onBlur) {
      onBlur();
    }
  };

  const inputClass = `inputField ${disabled ? 'inputField-disabled' : ''} ${leftIcon ? 'inputField-leftIcon' : ''} ${
    error ? 'inputField-error' : ''
  } ${isFocused ? 'inputField-focused' : ''}`;

  return (
    <div className='componentWrapper'>
      {label && <label className={`inputWrapper-label ${error ? 'inputWrapper-error' : ''}`}>{label}</label>}
      <div className={`inputWrapper ${disabled ? 'inputWrapper-disabled' : ''} ${error ? 'inputWrapper-error' : ''} `}>
        {leftIcon && <span className={`inputWrapper-icon-left ${isFocused ? 'inputWrapper-icon-left-focused' : ''}`}>{leftIcon}</span>}
        <input
          type="text"
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          className={inputClass}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
    </div>
  );
};

export default Input;
