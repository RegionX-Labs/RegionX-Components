// src/components/Select/Select.tsx
import React, { useState } from 'react';
import './Select.scss';
import Input from '../Input/Input'; 
import ChevronDown from '../../assets/icons/chevronDown.svg';

interface SelectOption {
  value: string;
  label: string;
  icon?: string;
}

interface SelectProps {
  options: SelectOption[]; 
  searchable?: boolean; 
  onChange?: (value: string) => void;
  label?: string; 
  disabled?: boolean; 
}

const Select: React.FC<SelectProps> = ({ options, searchable = false, onChange, label, disabled = false }) => {
  const [searchTerm, setSearchTerm] = useState(''); 
  const [selectedValue, setSelectedValue] = useState<string | null>(null); // Selected value
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); 

  const handleOptionClick = (value: string) => {
    setSelectedValue(value);
    setIsDropdownOpen(false);
    if (onChange) onChange(value); 
  };

  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectClassName = `selectBox ${disabled ? 'selectBox-disabled' : ''}`;

  return (
    <div className="selectWrapper">
      {/* Label */}
      {label && <label className="selectWrapper-label">{label}</label>}

      {/* Select box to toggle dropdown */}
      <div className={selectClassName} onClick={() => !disabled && setIsDropdownOpen(!isDropdownOpen)}>
        {selectedValue
          ? options.find(option => option.value === selectedValue)?.label
          : 'Select an option'}
        <span className="selectBox-arrow"><img src={ChevronDown} alt="arrow down"/></span>
      </div>

      {isDropdownOpen && !disabled && (
        <div className="selectDropdown">
          {searchable && (
            <Input
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              placeholder="Search..."
              disabled={disabled}
            />
          )}

          <ul className="selectDropdown-optionList">
            {filteredOptions.map(option => (
              <li key={option.value} onClick={() => handleOptionClick(option.value)} className={`selectDropdown-optionList-optionItem ${option.value === selectedValue ? 'selected' : ''}`}>
                {option.icon && <img src={`${option.icon}`} alt={option.label} className="optionIcon" />}
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Select;
