// src/components/molecules/TamagotchiStatus.js
import React from 'react';

const TamagotchiStatus = ({ hunger, happiness, energy, isAlive }) => {
  return (
    <div className="nes-container with-title" style={{ marginTop: '20px' }}>
      <p className="title">Statut du Tamagotchi</p>
      <p>Faim : {hunger}</p>
      <p>Bonheur : {happiness}</p>
      <p>Énergie : {energy}</p>
      {!isAlive && <p className="nes-text is-error">Votre Tamagotchi est décédé 😢</p>}
    </div>
  );
};

export default TamagotchiStatus;
