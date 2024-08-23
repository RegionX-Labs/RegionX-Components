// src/components/Button.tsx
import React from 'react';
import './LabelCard.scss';

interface ButtonProps {
  label: string;
  color?: 'yellowDark' | 'greenDark' | 'orangeDark' | 'pinkDark' | 'cyan' | 'redDark' | 'purpleDark' | 'teal' | 'blueDark' | 'gray6' | 'dark5';
  variant?: 'primary' | 'transparent';
  pillStyle?: boolean;
}

const LabelCard: React.FC<ButtonProps> = ({ label, variant = 'primary', color = 'yellowDark', pillStyle = false }) => {
  return (
    <div className={`LableCardWrapper ${variant} ${variant === 'transparent' ? `${color}` : ''} ${pillStyle ? 'pill' : ''} `} style={{ '--label-color': `var(--${color})` } as React.CSSProperties}>
      {label}
    </div>
  );
};

export default LabelCard;
