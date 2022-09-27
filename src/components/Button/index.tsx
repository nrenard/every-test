import React from 'react';

import './styles.scss'

interface IProps {
  variant: 'green' | 'red' | 'blue';
  type?: 'button' | 'submit';
  disabled?: boolean;
  onClick?: (params: any) => void;
}

export const Button: React.FC<IProps> = ({ children, variant, onClick, disabled, type = 'button' }) => {
  return (
    <button
      className={`button ${variant}`}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
