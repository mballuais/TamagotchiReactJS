// src/components/atoms/ProgressBar.js
// src/components/atoms/ProgressBar.js
import React from 'react';

const ProgressBar = ({ progress, variant }) => {
  const className = `nes-progress ${variant ? `is-${variant}` : ''}`;
  return (
    <progress className={className} value={progress} max="100"></progress>
  );
};

export default ProgressBar;

