// src/components/pages/LauncherPage.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PokeApi from '../molecules/PokeApi';
import { getRandomItem } from '../../jinfunctions';
import EggGenerator from './EggGenerator';

const LauncherPage = () => {
  const navigate = useNavigate();
  const [type, setType] = useState(null)
  const [tamagotchiFound, setTamagotchiFound] = useState(false);

  const selectTamagotchi = (type) => {
    // Stocker le type de Tamagotchi sélectionné dans le localStorage
    localStorage.setItem('selectedTamagotchi', type);


    // dispatch(fetchPokemonByType(type))

    setType(type)
    // Rediriger vers la page du Tamagotchi
  };

  useEffect(() => {
    if (tamagotchiFound) {
      navigate('/home');
    }
  }, [
    tamagotchiFound
  ])
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
      {type !== null ? <EggGenerator onComplete={() => { setTamagotchiFound(true) }} type={type}></EggGenerator> : <></>}

    </div>
  );




};

export default LauncherPage;
