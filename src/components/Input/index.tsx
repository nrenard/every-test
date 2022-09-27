import React from 'react';

import './styles.scss'

interface IProps {
  onChange: (value: string) => void;
  placeholder: string;
  value?: string;
}

const Input: React.FC<IProps> = ({ onChange, placeholder, value }) => {
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  return <input
    className="input"
    placeholder={placeholder}
    type="text"
    onChange={handleChangeInput}
    value={value}
  />;
}

export default Input;
