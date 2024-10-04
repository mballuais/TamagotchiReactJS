// src/components/pages/HomePage.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TamagotchiPanel from '../organisms/TamagotchiPanel';
import useTamagotchi from '../hooks/useTamagotchi';
import WeatherComponent from '../organisms/WeatherComponent';

const HomePage = () => {
  const navigate = useNavigate();
  const {
    hunger,
    happiness,
    energy,
    feedTamagotchi,
    playWithTamagotchi,
    restTamagotchi,
    resetTamagotchi,
    isAlive,
    missions,
    age,
    selectedTamagotchi,
  } = useTamagotchi();

  // Rediriger vers la page de lancement si aucun Tamagotchi n'est sélectionné
  useEffect(() => {
    if (!selectedTamagotchi) {
      navigate('/');
    }
  }, [selectedTamagotchi, navigate]);

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
        resetTamagotchi={() => {
          navigate('/');
          resetTamagotchi()

        }}
        isAlive={isAlive}
        missions={missions}
        age={age}
      />
      <h2>Météo</h2>
      <WeatherComponent />
    </div>
  );
};

export default HomePage;
