// src/components/Button/Button.tsx
import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset' | 'link'; // Determines type of button
  onClick?: () => void; // Click handler
  onSubmit?: () => void; // Submit handler if part of a form
  error?: boolean; // Add error styling if true
  href?: string; // If it's a link, this will be the URL
  disabled?: boolean; // Disable the button
  loading?: boolean; // A loading animation and disables the button.
  color?: 'greenPrimary' | 'dark' | 'redDark' | 'gray3';
  children: React.ReactNode; // Button content (label)
  rightIcon?: React.ReactElement; // Right icon as React component (e.g., SearchIcon)
}

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  color = 'greenPrimary',
  onClick,
  onSubmit,
  error = false,
  href,
  disabled = false,
  loading = false,
  children,
  rightIcon, 
}) => {
  const buttonClass = `${styles.buttonWrapper} ${error ? styles['buttonWrapper-error'] : ''} ${disabled ? styles['buttonWrapper-disabled'] : ''}`;

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
        {rightIcon && <span className={styles["buttonWrapper-icon-right"]}>{rightIcon}</span>}
      </a>
    );
  }

  return (
    <button
      type={type === 'submit' ? 'submit' : 'button'}
      onClick={type === 'submit' ? onSubmit : onClick}
      disabled={disabled || loading}
      className={buttonClass}
      style={{ 
        pointerEvents: disabled || loading ? 'none' : 'auto', 
        '--button-color': `var(--${color})` 
      } as React.CSSProperties}
    >
      {loading &&
        <Loading />
      }
      <span style={{ opacity: loading ? '0%' : '100%' }}>{children}</span>
      {rightIcon && <span className={styles["buttonWrapper-icon-right"]}>{rightIcon}</span>}
    </button>
  );
};

const Loading = () => {
  return (
    <div className={styles['loading']}>
      <div></div> {/* Represents a DOT */}
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default Button;
