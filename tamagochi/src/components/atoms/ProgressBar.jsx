import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ProgressBarContainer = styled.div`
  background-color: #e0e0e0;
  border-radius: 5px;
  overflow: hidden;
  height: 20px;
  width: 100%; 
`;
const ProgressFill = styled.div`
  background-color: #76c7c0; /* Couleur de la barre de progression */
  height: 100%;
  transition: width 0.3s ease; /* Animation de la barre */
`;

const ProgressBar = ({ progress }) => {
  return (
    <ProgressBarContainer>
      <ProgressFill style={{ width: `${progress}%` }} />
    </ProgressBarContainer>
  );
};

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default ProgressBar;