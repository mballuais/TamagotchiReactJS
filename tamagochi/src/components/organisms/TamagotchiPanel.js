// src/components/organisms/TamagotchiPanel.js
import React from 'react';
import Button from '../atoms/Button';
import useTamagotchi from '../hooks/useTamagotchi';

const TamagotchiPanel = () => {
  const { hunger, happiness, energy, feedTamagotchi, playWithTamagotchi, restTamagotchi, isAlive } = useTamagotchi();

  return (
    <div>
      <h1>Tamagotchi</h1>
      {isAlive ? (
        <>
          <p>Faim: {hunger}</p>
          <p>Heureux: {happiness}</p>
          <p>Energie: {energy}</p>

          {/* Boutons pour les différentes actions */}
          <Button onClick={feedTamagotchi} label="Ca Graille" />
          <Button onClick={playWithTamagotchi} label="Ca Joue" />
          <Button onClick={restTamagotchi} label="Ca Rompiche" />
        </>
      ) : (
        <p>Il est mort guignol</p>
      )}
    </div>
  );
};

export default TamagotchiPanel;
