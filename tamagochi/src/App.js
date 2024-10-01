import React, { useState } from 'react';
import ProgressBar from './components/atoms/ProgressBar';
import EvolutionImage from './components/assets/images'; // Assurez-vous que ce chemin est correct
import TamagotchiPanel from './components/organisms/TamagotchiPanel';

const App = () => {
  const [progress, setProgress] = useState(0);

  const increaseProgress = () => {
    setProgress(prevProgress => Math.min(prevProgress + 10, 100)); // Incrémente de 10% sans dépasser 100%
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Tamagotchi Progression</h1>

      {/* Barre de progression */}
      <ProgressBar progress={progress} />

      {/* Image évolutive */}
      <EvolutionImage progress={progress} />

      {/* Bouton pour augmenter la progression */}
      <button onClick={increaseProgress} style={{ marginTop: '10px' }}>
        Increase Progress
      </button>

      {/* Tamagotchi Panel */}
      <TamagotchiPanel />
    </div>
  );
}

export default App;
