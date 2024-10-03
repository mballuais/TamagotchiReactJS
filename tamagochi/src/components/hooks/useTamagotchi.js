// src/hooks/useTamagotchi.js
import { useState, useEffect } from 'react';

const useTamagotchi = () => {
  // États existants
  const [hunger, setHunger] = useState(50);
  const [happiness, setHappiness] = useState(50);
  const [energy, setEnergy] = useState(50);
  const [isAlive, setIsAlive] = useState(true);

  // Nouvel état pour l'âge (progression)
  const [age, setAge] = useState(() => {
    const storedAge = localStorage.getItem('tamagotchiAge');
    return storedAge ? parseInt(storedAge, 10) : 0;
  });

  // États pour les missions quotidiennes
  const [missions, setMissions] = useState(() => {
    const storedMissions = localStorage.getItem('missions');
    return storedMissions
      ? JSON.parse(storedMissions)
      : { played: false, fed: false, rested: false };
  });

  // Pour les tests, définir IS_TEST_MODE à true
  const IS_TEST_MODE = true;

  // Fonction pour réinitialiser les missions
  useEffect(() => {
    if (IS_TEST_MODE) {
      const resetInterval = setInterval(() => {
        // Réinitialiser les missions toutes les 10 secondes
        setMissions({ played: false, fed: false, rested: false });
        // Réinitialiser l'indicateur d'augmentation de l'âge
        localStorage.removeItem('ageIncreased');
      }, 10000); // 10000 millisecondes = 10 secondes

      return () => clearInterval(resetInterval);
    } else {
      // Code de production (reset quotidien)
      const today = new Date().toDateString();
      const lastReset = localStorage.getItem('lastResetDate');

      if (lastReset !== today) {
        // Réinitialiser les missions
        setMissions({ played: false, fed: false, rested: false });
        localStorage.setItem('lastResetDate', today);
        localStorage.removeItem('ageIncreased');
      }
    }
  }, [IS_TEST_MODE]);

  // Sauvegarder les missions et l'âge dans le localStorage à chaque changement
  useEffect(() => {
    localStorage.setItem('missions', JSON.stringify(missions));
    localStorage.setItem('tamagotchiAge', age);
  }, [missions, age]);

  // Vérifier si toutes les missions sont accomplies pour augmenter l'âge
  useEffect(() => {
    if (missions.played && missions.fed && missions.rested) {
      const ageIncreased = localStorage.getItem('ageIncreased');

      if (!ageIncreased) {
        setAge((prevAge) => Math.min(prevAge + 15, 100)); // Limiter l'âge à 100%
        localStorage.setItem('ageIncreased', 'true');
      }
    }
  }, [missions]);

  // Actions pour les missions
  const feedTamagotchi = () => {
    if (!isAlive) return;

    // Votre logique existante pour nourrir le Tamagotchi
    setHunger((prevHunger) => Math.min(prevHunger + 10, 100));

    // Marquer la mission comme accomplie
    setMissions((prevMissions) => ({ ...prevMissions, fed: true }));
  };

  const playWithTamagotchi = () => {
    if (!isAlive) return;

    // Votre logique existante pour jouer avec le Tamagotchi
    setHappiness((prevHappiness) => Math.min(prevHappiness + 10, 100));

    // Marquer la mission comme accomplie
    setMissions((prevMissions) => ({ ...prevMissions, played: true }));
  };

  const restTamagotchi = () => {
    if (!isAlive) return;

    // Votre logique existante pour reposer le Tamagotchi
    setEnergy((prevEnergy) => Math.min(prevEnergy + 10, 100));

    // Marquer la mission comme accomplie
    setMissions((prevMissions) => ({ ...prevMissions, rested: true }));
  };

  // Votre logique existante pour diminuer les valeurs, etc.
  // ...

  return {
    hunger,
    happiness,
    energy,
    feedTamagotchi,
    playWithTamagotchi,
    restTamagotchi,
    isAlive,
    missions,
    age,
  };
};

export default useTamagotchi;