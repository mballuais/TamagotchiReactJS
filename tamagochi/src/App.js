import React, { useState } from 'react';
import Button from './components/atoms/Button';
import ProgressBar from './components/atoms/ProgressBar';
import EvolutionImage from './components/assets/images';
import TamagotchiPanel from './components/organisms/TamagotchiPanel'

// function App() {
//   const [count, setCount] = useState(0);

const App = () => {
  const [progress, setProgress] = useState(0);


  // const handleClick = () => {
  //   setCount(count + 1);
  // };

  const increaseProgress = () => {
    setProgress(prevProgress => Math.min(prevProgress + 10, 100)); // Incrémente de 10% sans dépasser 100%
  };



  
const App = () => {
  const [progress, setProgress] = useState(0);


  // const handleClick = () => {
  //   setCount(count + 1);
  // };

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
      <TamagotchiPanel />
    </div>
  );
}

export default App;