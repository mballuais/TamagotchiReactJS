// src/components/molecules/TamagotchiMissions.js
import React from 'react';

const TamagotchiMissions = ({ missions }) => {
  return (
    <div className="nes-container with-title" style={{ marginTop: '20px' }}>
      <p className="title">Missions du jour</p>
      <ul className="nes-list is-disc">
        <li>
          Nourrir le Tamagotchi :{' '}
          {missions.fed ? '✅ Accomplie' : '❌ Non accomplie'}
        </li>
        <li>
          Jouer avec le Tamagotchi :{' '}
          {missions.played ? '✅ Accomplie' : '❌ Non accomplie'}
        </li>
        <li>
          Laisser dormir le Tamagotchi :{' '}
          {missions.rested ? '✅ Accomplie' : '❌ Non accomplie'}
        </li>
      </ul>
    </div>
  );
};

export default TamagotchiMissions;
