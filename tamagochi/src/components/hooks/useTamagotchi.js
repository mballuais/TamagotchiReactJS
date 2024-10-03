// src/hooks/useTamagotchi.js
import { useState, useEffect } from 'react';

const useTamagotchi = () => {
  // États initiaux
  const initialHunger = 50;
  const initialHappiness = 50;
  const initialEnergy = 50;
  const initialAge = 0;
  const initialMissions = { played: false, fed: false, rested: false };

  // États
  const [hunger, setHunger] = useState(() => {
    const storedHunger = localStorage.getItem('hunger');
    return storedHunger ? parseInt(storedHunger, 10) : initialHunger;
  });

  const [happiness, setHappiness] = useState(() => {
    const storedHappiness = localStorage.getItem('happiness');
    return storedHappiness ? parseInt(storedHappiness, 10) : initialHappiness;
  });

  const [energy, setEnergy] = useState(() => {
    const storedEnergy = localStorage.getItem('energy');
    return storedEnergy ? parseInt(storedEnergy, 10) : initialEnergy;
  });

  const [age, setAge] = useState(() => {
    const storedAge = localStorage.getItem('tamagotchiAge');
    return storedAge ? parseInt(storedAge, 10) : initialAge;
  });

  const [missions, setMissions] = useState(() => {
    const storedMissions = localStorage.getItem('missions');
    return storedMissions
      ? JSON.parse(storedMissions)
      : initialMissions;
  });

  const [isAlive, setIsAlive] = useState(true);

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

  // Sauvegarder les états dans le localStorage
  useEffect(() => {
    localStorage.setItem('hunger', hunger);
    localStorage.setItem('happiness', happiness);
    localStorage.setItem('energy', energy);
    localStorage.setItem('tamagotchiAge', age);
    localStorage.setItem('missions', JSON.stringify(missions));
  }, [hunger, happiness, energy, age, missions]);

  // Vérifier si toutes les missions sont accomplies pour augmenter l'âge
  useEffect(() => {
    if (missions.played && missions.fed && missions.rested) {
      const ageIncreased = localStorage.getItem('ageIncreased');

      if (!ageIncreased) {
        setAge((prevAge) => Math.min(prevAge + 15, 100));
        localStorage.setItem('ageIncreased', 'true');
      }
    }
  }, [missions]);

  // Vérifier si le Tamagotchi est en vie
  useEffect(() => {
    if (hunger <= 0 || happiness <= 0 || energy <= 0) {
      setIsAlive(false);
    }
  }, [hunger, happiness, energy]);

  // Actions pour les missions
  const feedTamagotchi = () => {
    if (!isAlive) return;

    setHunger((prevHunger) => Math.min(prevHunger + 10, 100));

    setMissions((prevMissions) => ({ ...prevMissions, fed: true }));
  };

  const playWithTamagotchi = () => {
    if (!isAlive) return;

    setHappiness((prevHappiness) => Math.min(prevHappiness + 10, 100));

    setMissions((prevMissions) => ({ ...prevMissions, played: true }));
  };

  const restTamagotchi = () => {
    if (!isAlive) return;

    setEnergy((prevEnergy) => Math.min(prevEnergy + 10, 100));

    setMissions((prevMissions) => ({ ...prevMissions, rested: true }));
  };

  // Diminuer les valeurs au fil du temps
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAlive) {
        clearInterval(interval);
        return;
      }

      setHunger((prev) => Math.max(prev - 5, 0));
      setHappiness((prev) => Math.max(prev - 5, 0));
      setEnergy((prev) => Math.max(prev - 5, 0));
    }, 8000); // Toutes les 8 secondes

    return () => clearInterval(interval);
  }, [isAlive]);

  // Fonction pour réinitialiser le Tamagotchi
  const resetTamagotchi = () => {
    // Réinitialiser les états
    setHunger(initialHunger);
    setHappiness(initialHappiness);
    setEnergy(initialEnergy);
    setAge(initialAge);
    setMissions(initialMissions);
    setIsAlive(true);

    // Effacer le localStorage
    localStorage.removeItem('hunger');
    localStorage.removeItem('happiness');
    localStorage.removeItem('energy');
    localStorage.removeItem('tamagotchiAge');
    localStorage.removeItem('missions');
    localStorage.removeItem('ageIncreased');
    localStorage.removeItem('isShiny');
    localStorage.removeItem('lastResetDate');
    localStorage.removeItem('ageIncreasedDate');
  };

  return {
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
  };
};

export default useTamagotchi;
