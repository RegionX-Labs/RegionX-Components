// src/components/Slider/Slider.tsx
import React from 'react';
import styles from './Balance.module.scss';

interface BalanceProps {
  name: string;
  value: string;
  icon?: string;
}

const Slider: React.FC<BalanceProps> = ({ name, value, icon }) => {

  return (
    <div className={styles["balanceWrapper"]}>
        <div className={styles["balanceWrapper-name"]}>
            <p>{name}</p>
        </div>
        <div className={styles["balanceWrapper-value"]}>
            <p>{value}</p>
            <img src={icon} alt="name"/>
        </div>
    </div>
  );
};

export default Slider;
