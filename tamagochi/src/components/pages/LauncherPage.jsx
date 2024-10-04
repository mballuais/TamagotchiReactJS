// src/components/pages/LauncherPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LauncherPage = () => {
  const navigate = useNavigate();

  const selectTamagotchi = (type) => {
    // Stocker le type de Tamagotchi sélectionné dans le localStorage
    localStorage.setItem('selectedTamagotchi', type);
    // Rediriger vers la page du Tamagotchi
    navigate('/home');
  };

  return (
    <div className="nes-container is-dark with-title" style={{ margin: '20px', textAlign: 'center' }}>
      <p className="title">Choisissez votre Tamagotchi</p>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {/* Œuf 1 */}
        <div onClick={() => selectTamagotchi('water')} style={{ cursor: 'pointer', margin: '0 20px' }}>
          <img src="/assets/eggs/egg.png" alt="Œuf" />
          <p>Type Eau</p>
        </div>
        {/* Œuf 2 */}
        <div onClick={() => selectTamagotchi('fire')} style={{ cursor: 'pointer', margin: '0 20px' }}>
          <img src="/assets/eggs/egg.png" alt="Œuf" />
          <p>Type Feu</p>
        </div>
        {/* Œuf 3 */}
        <div onClick={() => selectTamagotchi('dark')} style={{ cursor: 'pointer', margin: '0 20px' }}>
          <img src="/assets/eggs/egg.png" alt="Œuf" />
          <p>Type Obscurité</p>
        </div>
      </div>
    </div>
  );
};

export default LauncherPage;
