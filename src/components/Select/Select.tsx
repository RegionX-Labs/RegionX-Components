import React, { useEffect, useRef, useState } from 'react';
import styles from './Select.module.scss';
import Input from '../AddressInput/AddressInput'; 
import DownArrow from '../../assets/icons/DownArrow.svg';
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

  const selectClassName = `${styles.selectBox} ${disabled ? styles['selectBox-disabled'] : ''}`;

  return (
    <div className={styles["selectWrapper"]} ref={dropdownRef}>
      {label && <label className={styles["selectWrapper-label"]}>{label}</label>}
      <div className={selectClassName} onClick={() => !disabled && setIsDropdownOpen(!isDropdownOpen)}>
        {selectedOption ? (
          <div className={styles["selectedOptionDisplay"]}>
            {selectedOption.icon && <img src={selectedOption.icon} alt={selectedOption.label} className={styles["optionIcon"]} />}
            {!showOnlySelectedIcon && <span>{selectedOption.label}</span>}
          </div>
        ) : 'Select an option'}
        <span className={styles["selectBox-arrow"]}>
          <img src={DownArrow} alt="arrow down" />
        </span>
      </div>

      {isDropdownOpen && !disabled && (
        <div className={styles["selectDropdown"]}>
          {searchable && (
            <Input
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              placeholder="Search..."
              disabled={disabled}
            />
          )}

          <ul className={styles["selectDropdown-optionList"]}>
            {filteredOptions.map(option => (
              <li key={option.value} onClick={() => handleOptionClick(option.value)} className={`${styles['selectDropdown-optionList-optionItem']} ${option.value === selected ? styles['selected'] : ''}`}>
                {option.icon && <img src={option.icon} alt={option.label} className={styles["optionIcon"]} />}
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
