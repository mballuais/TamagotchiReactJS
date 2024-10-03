// src/App.js
import React from 'react';
import TamagotchiPanel from './components/organisms/TamagotchiPanel';
import useTamagotchi from './components/hooks/useTamagotchi';
import WeatherComponent from './components/organisms/WeatherComponent';
import 'nes.css/css/nes.min.css';
import './App.css';


const App = () => {
  const {
    hunger,
    happiness,
    energy,
    feedTamagotchi,
    playWithTamagotchi,
    restTamagotchi,
    isAlive,
    missions,
    age,
  } = useTamagotchi();

  return (
    <div className="nes-container is-white with-title main-container">
      <p className="title">Tamagotchi</p>
      <TamagotchiPanel
        hunger={hunger}
        happiness={happiness}
        energy={energy}
        feedTamagotchi={feedTamagotchi}
        playWithTamagotchi={playWithTamagotchi}
        restTamagotchi={restTamagotchi}
        isAlive={isAlive}
        missions={missions}
        age={age}
      />
    <h2>Météo</h2>
    <WeatherComponent />
    </div>
  );
};

export default App;
