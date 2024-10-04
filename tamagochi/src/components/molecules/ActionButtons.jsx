// src/components/molecules/ActionButtons.js
import React from 'react';
import Button from '../atoms/Button';

const ActionButtons = ({
  feedTamagotchi,
  playWithTamagotchi,
  restTamagotchi,
  resetTamagotchi, // Ajoutez ceci
  isAlive,
}) => {
  return (
    <div className="nes-container with-title" style={{ marginTop: '20px' }}>
      <p className="title">Actions</p>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Button onClick={feedTamagotchi} disabled={!isAlive} variant="primary">
          Nourrir
        </Button>
        <Button onClick={playWithTamagotchi} disabled={!isAlive} variant="success">
          Jouer
        </Button>
        <Button onClick={restTamagotchi} disabled={!isAlive} variant="warning">
          Dormir
        </Button>
        {/* Bouton Reset */}
        <Button onClick={resetTamagotchi} variant="error">
          Reset
        </Button>
      </div>
    </div>
  );
};

export default ActionButtons;
