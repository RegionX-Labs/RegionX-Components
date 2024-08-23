// src/components/Button/Button.tsx
import React from 'react';
import './Button.scss';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset' | 'link'; // Determines type of button
  onClick?: () => void; // Click handler
  onSubmit?: () => void; // Submit handler if part of a form
  error?: boolean; // Add error styling if true
  href?: string; // If it's a link, this will be the URL
  disabled?: boolean; // Disable the button
  color?: 'greenDark' | 'dark' | 'redDark' | 'gray3';
  children: React.ReactNode; // Button content (label)
  rightIcon?: React.ReactElement; // Right icon as React component (e.g., SearchIcon)
}

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  color = 'greenDark',
  onClick,
  onSubmit,
  error = false,
  href,
  disabled = false,
  children,
  rightIcon, 
}) => {
  const buttonClass = `buttonWrapper ${error ? 'buttonWrapper-error' : ''} ${disabled ? 'buttonWrapper-disabled' : ''}`;

  if (type === 'link' && href) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={buttonClass}
        style={{ 
          pointerEvents: disabled ? 'none' : 'auto', 
          '--button-color': `var(--${color})` 
        } as React.CSSProperties}>
        {children}
        {rightIcon && <span className="buttonWrapper-icon-right">{rightIcon}</span>}
      </a>
    );
  }

  return (
    <button
      type={type === 'submit' ? 'submit' : 'button'}
      onClick={type === 'submit' ? onSubmit : onClick}
      disabled={disabled}
      className={buttonClass}
      style={{ 
        pointerEvents: disabled ? 'none' : 'auto', 
        '--button-color': `var(--${color})` 
      } as React.CSSProperties}
    >
      {children}
      {rightIcon && <span className="buttonWrapper-icon-right">{rightIcon}</span>}
    </button>
  );
};

export default Button;
