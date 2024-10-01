// assets/images.jsx
import React, { useState, useEffect } from 'react';

const EvolutionImage = ({ progress }) => {
  const [isShiny, setIsShiny] = useState(null); // Détermine si le Pokémon est shiny

  useEffect(() => {
    // Si shiny n'a pas encore été défini, on le calcule une seule fois
    if (isShiny === null) {
      const randomChance = Math.random();
      setIsShiny(randomChance < 0.1); // 1 chance sur 10 de devenir shiny
    }
  }, [isShiny]);

  let imageUrl, linkUrl, altText;

  if (progress < 33) {
    // Étape 1 : Azurill
    linkUrl = "https://pokemondb.net/pokedex/azurill";
    imageUrl = isShiny
      ? "https://img.pokemondb.net/sprites/heartgold-soulsilver/shiny/azurill.png"
      : "https://img.pokemondb.net/sprites/heartgold-soulsilver/normal/azurill.png";
    altText = "Azurill";
  } else if (progress < 66) {
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
    <a href={linkUrl} target="_blank" rel="noopener noreferrer">
      <img src={imageUrl} alt={altText} />
    </a>
  );
};

export default EvolutionImage;
