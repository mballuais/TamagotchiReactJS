import React from 'react';

const EvolutionImage = ({ progress }) => {
  let imageUrl, linkUrl, altText;

  if (progress < 33) {
    // Étape 1 : Azurill
    linkUrl = "https://pokemondb.net/pokedex/azurill";
    imageUrl = "https://img.pokemondb.net/sprites/heartgold-soulsilver/normal/azurill.png";
    altText = "Azurill";
  } else if (progress < 66) {
    // Étape 2 : Marill
    linkUrl = "https://pokemondb.net/pokedex/marill";
    imageUrl = "https://img.pokemondb.net/sprites/heartgold-soulsilver/normal/marill.png";
    altText = "Marill";
  } else {
    // Étape 3 : Azumarill
    linkUrl = "https://pokemondb.net/pokedex/azumarill";
    imageUrl = "https://img.pokemondb.net/sprites/heartgold-soulsilver/normal/azumarill.png";
    altText = "Azumarill";
  }

  return (
    <a href={linkUrl} target="_blank" rel="noopener noreferrer">
      <img src={imageUrl} alt={altText} />
    </a>
  );
};

export default EvolutionImage;