// src/components/Slider/Slider.tsx
import React from 'react';
import './Balance.scss';

interface BalanceProps {
  name: string;
  value: string;
  icon?: string;
}

const Slider: React.FC<BalanceProps> = ({ name, value, icon }) => {

  return (
    <div className="balanceWrapper">
        <div className='balanceWrapper-name'>
            <p>{name}</p>
        </div>
        <div className='balanceWrapper-value'>
            <p>{value}</p>
            <img src={icon} alt="name"/>
        </div>
    </div>
  );
};

export default Slider;
