
// src/components/organisms/TamagotchiPanel.js
import React, { useState } from 'react';
import TamagotchiStatus from '../molecules/TamagotchiStatus';
import ActionButtons from '../molecules/ActionButtons';
import TamagotchiMissions from '../molecules/TamagotchiMissions';
import EvolutionImage from '../assets/EvolutionImage';
import ProgressBar from '../atoms/ProgressBar';

const TamagotchiPanel = (props) => {
  const [showMissions, setShowMissions] = useState(false);

  const toggleMissions = () => {
    setShowMissions((prev) => !prev);
  };

  return (
    <div>
      {/* Barre de progression en haut */}
      <div className="nes-container with-title" style={{ marginBottom: '20px' }}>
        <p className="title">Progression d'évolution</p>
        <ProgressBar progress={props.age} variant="primary" />
      </div>

      {/* Conteneur principal */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* Statut à gauche */}
        <div style={{ flex: '1', marginRight: '10px' }}>
          <TamagotchiStatus
            hunger={props.hunger}
            happiness={props.happiness}
            energy={props.energy}
            isAlive={props.isAlive}
          />
        </div>

        {/* Image du Tamagotchi au centre */}
        <div className="nes-container is-rounded" style={{ padding: '20px' }}>
          <EvolutionImage age={props.age} />
        </div>

        {/* Bouton pour afficher les missions à droite */}
        <div style={{ flex: '1', marginLeft: '10px', textAlign: 'center' }}>
          <button
            type="button"
            className="nes-btn is-primary"
            onClick={toggleMissions}
            style={{ marginBottom: '20px' }}
          >
            {showMissions ? 'Masquer les missions' : 'Afficher les missions'}
          </button>
          {/* Affichage des missions si showMissions est vrai */}
          {showMissions && <TamagotchiMissions missions={props.missions} />}
        </div>
      </div>

      {/* Boutons d'action en bas */}
      <div style={{ marginTop: '20px' }}>
        <ActionButtons
          feedTamagotchi={props.feedTamagotchi}
          playWithTamagotchi={props.playWithTamagotchi}
          restTamagotchi={props.restTamagotchi}
          resetTamagotchi={props.resetTamagotchi}
          isAlive={props.isAlive}
        />
      </div>
    </div>
  );
};

export default TamagotchiPanel;
