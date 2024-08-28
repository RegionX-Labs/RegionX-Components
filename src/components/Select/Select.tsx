import React, { useEffect, useRef, useState } from 'react';
import './Select.scss';
import Input from '../AddressInput/AddressInput'; 
import ChevronDown from '../../assets/icons/chevronDown.svg';
import { SelectOption } from '../../types/types';

interface SelectProps {
  options: SelectOption[];
  searchable?: boolean;
  onChange?: (value: string) => void;
  label?: string;
  disabled?: boolean;
  selectedValue?: string | null;
  showOnlySelectedIcon?: boolean;
}

const Select: React.FC<SelectProps> = ({
  options,
  searchable = false,
  onChange,
  label,
  disabled = false,
  selectedValue = null,
  showOnlySelectedIcon = false,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selected, setSelected] = useState<string | null>(selectedValue);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedValue) {
      setSelected(selectedValue);
    }
  }, [selectedValue]);

  const handleOptionClick = (value: string) => {
    setSelected(value);
    setIsDropdownOpen(false);
    if (onChange) onChange(value);
  };

  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectedOption = options.find(option => option.value === selected);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  const selectClassName = `selectBox ${disabled ? 'selectBox-disabled' : ''}`;

  return (
    <div className="selectWrapper" ref={dropdownRef}>
      {label && <label className="selectWrapper-label">{label}</label>}
      <div className={selectClassName} onClick={() => !disabled && setIsDropdownOpen(!isDropdownOpen)}>
        {selectedOption ? (
          <div className="selectedOptionDisplay">
            {selectedOption.icon && <img src={selectedOption.icon} alt={selectedOption.label} className="optionIcon" />}
            {!showOnlySelectedIcon && <span>{selectedOption.label}</span>}
          </div>
        ) : 'Select an option'}
        <span className="selectBox-arrow">
          <img src={ChevronDown} alt="arrow down" />
        </span>
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
              <li key={option.value} onClick={() => handleOptionClick(option.value)} className={`selectDropdown-optionList-optionItem ${option.value === selected ? 'selected' : ''}`}>
                {option.icon && <img src={option.icon} alt={option.label} className="optionIcon" />}
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
