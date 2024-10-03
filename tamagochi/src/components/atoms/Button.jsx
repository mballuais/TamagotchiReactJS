// src/components/atoms/Button.js
import React from 'react';

const Button = ({ onClick, disabled, children, variant }) => {
  const className = `nes-btn ${variant ? `is-${variant}` : ''}`;
  return (
    <button onClick={onClick} disabled={disabled} className={className}>
      {children}
    </button>
  );
};

export default Button;
