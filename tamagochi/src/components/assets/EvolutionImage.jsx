// src/components/atoms/EvolutionImage.js
import React, { useState, useEffect } from 'react';

const EvolutionImage = ({ age }) => {
  const [isShiny, setIsShiny] = useState(() => {
    const storedShiny = localStorage.getItem('isShiny');
    if (storedShiny !== null) {
      return JSON.parse(storedShiny);
    } else {
      const randomChance = Math.random();
      const shiny = randomChance < 0.1; // 1 chance sur 10 d'être shiny
      localStorage.setItem('isShiny', JSON.stringify(shiny));
      return shiny;
    }
  });

  let imageUrl, linkUrl, altText;

  if (age < 33) {
    // Étape 1 : Azurill
    linkUrl = "https://pokemondb.net/pokedex/azurill";
    imageUrl = isShiny
      ? "https://img.pokemondb.net/sprites/heartgold-soulsilver/shiny/azurill.png"
      : "https://img.pokemondb.net/sprites/heartgold-soulsilver/normal/azurill.png";
    altText = "Azurill";
  } else if (age < 66) {
    // Étape 2 : Marill
    linkUrl = "https://pokemondb.net/pokedex/marill";
    imageUrl = isShiny
      ? "https://img.pokemondb.net/sprites/heartgold-soulsilver/shiny/marill.png"
      : "https://img.pokemondb.net/sprites/heartgold-soulsilver/normal/marill.png";
    altText = "Marill";
  } else {
    // Étape 3 : Azumarill
    linkUrl = "https://pokemondb.net/pokedex/azumarill";
    imageUrl = isShiny
      ? "https://img.pokemondb.net/sprites/heartgold-soulsilver/shiny/azumarill.png"
      : "https://img.pokemondb.net/sprites/heartgold-soulsilver/normal/azumarill.png";
    altText = "Azumarill";
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <a href={linkUrl} target="_blank" rel="noopener noreferrer">
        <img src={imageUrl} alt={altText} />
      </a>
    </div>
  );
};

export default EvolutionImage;
