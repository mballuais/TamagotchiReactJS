// src/hooks/useTamagotchi.js
import { useState, useEffect } from 'react';

const useTamagotchi = () => {
  const [hunger, setHunger] = useState(50);  // Niveau de faim initial
  const [happiness, setHappiness] = useState(50);  // Niveau de bonheur initial
  const [energy, setEnergy] = useState(50);  // Niveau d'énergie initial
  const [isAlive, setIsAlive] = useState(true);  // État du Tamagotchi (vivant ou mort)

  // Action pour nourrir le Tamagotchi
  const feedTamagotchi = () => {
    if (!isAlive) return; // Si le Tamagotchi est mort, on ne fait rien

    if (hunger === 100) {
      setIsAlive(false);  // Si la faim est déjà à 100, le Tamagotchi meurt
    } else {
      const randomHungerIncrease = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
      setHunger(hunger => {
        const newHunger = Math.min(hunger + randomHungerIncrease, 100);
        if (newHunger === 100) {
          setIsAlive(false);  // Si après le nourrissage la faim atteint 100, le Tamagotchi meurt
        }
        return newHunger;
      });
    }
  };

  // Action pour jouer avec le Tamagotchi (augmente le bonheur et diminue l'énergie)
  const playWithTamagotchi = () => {
    if (!isAlive) return; // Si le Tamagotchi est mort, on ne fait rien

    setHappiness(happiness => Math.min(happiness + 10, 100));  // Augmente le bonheur
    setEnergy(energy => Math.max(energy - 5, 0));  // Diminue l'énergie
  };

  // Action pour reposer le Tamagotchi (augmente l'énergie)
  const restTamagotchi = () => {
    if (!isAlive) return; // Si le Tamagotchi est mort, on ne fait rien

    setEnergy(energy => Math.min(energy + 10, 100));  // Augmente l'énergie
  };

  // Diminuer la faim toutes les secondes
  useEffect(() => {
    const interval = setInterval(() => {
      if (isAlive) {
        setHunger(hunger => {
          const newHunger = Math.max(hunger - 1, 0);  // Diminue la faim
          if (newHunger === 0) {
            setIsAlive(false);  // Si la faim atteint 0, le Tamagotchi meurt
          }
          return newHunger;
        });
      }
    }, 1000);  // Toutes les secondes

    return () => clearInterval(interval);
  }, [isAlive]);

  return { hunger, happiness, energy, feedTamagotchi, playWithTamagotchi, restTamagotchi, isAlive };
};

export default useTamagotchi;
