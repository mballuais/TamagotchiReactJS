// src/components/atoms/EvolutionImage.js
import React, { useState, useEffect } from 'react';
import useTamagotchi from '../hooks/useTamagotchi';

const EvolutionImage = ({ age }) => {
  const { selectedTamagotchi } = useTamagotchi();

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

  // Déterminer les évolutions en fonction du Pokémon sélectionné
  const getEvolutionData = () => {
    if (selectedTamagotchi === 'water') {
      // Évolutions pour type Eau (Azurill -> Marill -> Azumarill)
      if (age < 33) {
        return {
          linkUrl: 'https://pokemondb.net/pokedex/azurill',
          imageUrl: isShiny
            ? 'https://img.pokemondb.net/sprites/heartgold-soulsilver/shiny/azurill.png'
            : 'https://img.pokemondb.net/sprites/heartgold-soulsilver/normal/azurill.png',
          altText: 'Azurill',
        };
      } else if (age < 66) {
        return {
          linkUrl: 'https://pokemondb.net/pokedex/marill',
          imageUrl: isShiny
            ? 'https://img.pokemondb.net/sprites/heartgold-soulsilver/shiny/marill.png'
            : 'https://img.pokemondb.net/sprites/heartgold-soulsilver/normal/marill.png',
          altText: 'Marill',
        };
      } else {
        return {
          linkUrl: 'https://pokemondb.net/pokedex/azumarill',
          imageUrl: isShiny
            ? 'https://img.pokemondb.net/sprites/heartgold-soulsilver/shiny/azumarill.png'
            : 'https://img.pokemondb.net/sprites/heartgold-soulsilver/normal/azumarill.png',
          altText: 'Azumarill',
        };
      }
    } else if (selectedTamagotchi === 'fire') {
      // Évolutions pour type Feu (Charmander -> Charmeleon -> Charizard)
      if (age < 33) {
        return {
          linkUrl: 'https://pokemondb.net/pokedex/charmander',
          imageUrl: isShiny
            ? 'https://img.pokemondb.net/sprites/black-white/shiny/charmander.png'
            : 'https://img.pokemondb.net/sprites/black-white/normal/charmander.png',
          altText: 'Charmander',
        };
      } else if (age < 66) {
        return {
          linkUrl: 'https://pokemondb.net/pokedex/charmeleon',
          imageUrl: isShiny
            ? 'https://img.pokemondb.net/sprites/black-white/shiny/charmeleon.png'
            : 'https://img.pokemondb.net/sprites/black-white/normal/charmeleon.png',
          altText: 'Charmeleon',
        };
      } else {
        return {
          linkUrl: 'https://pokemondb.net/pokedex/charizard',
          imageUrl: isShiny
            ? 'https://img.pokemondb.net/sprites/black-white/shiny/charizard.png'
            : 'https://img.pokemondb.net/sprites/black-white/normal/charizard.png',
          altText: 'Charizard',
        };
      }
    } else if (selectedTamagotchi === 'dark') {
      // Évolutions pour type Obscurité (Deino -> Zweilous -> Hydreigon)
      if (age < 33) {
        return {
          linkUrl: 'https://pokemondb.net/pokedex/deino',
          imageUrl: isShiny
            ? 'https://img.pokemondb.net/sprites/black-white/shiny/deino.png'
            : 'https://img.pokemondb.net/sprites/black-white/normal/deino.png',
          altText: 'Deino',
        };
      } else if (age < 66) {
        return {
          linkUrl: 'https://pokemondb.net/pokedex/zweilous',
          imageUrl: isShiny
            ? 'https://img.pokemondb.net/sprites/black-white/shiny/zweilous.png'
            : 'https://img.pokemondb.net/sprites/black-white/normal/zweilous.png',
          altText: 'Zweilous',
        };
      } else {
        return {
          linkUrl: 'https://pokemondb.net/pokedex/hydreigon',
          imageUrl: isShiny
            ? 'https://img.pokemondb.net/sprites/black-white/shiny/hydreigon.png'
            : 'https://img.pokemondb.net/sprites/black-white/normal/hydreigon.png',
          altText: 'Hydreigon',
        };
      }
    } else {
      return {
        linkUrl: '',
        imageUrl: '',
        altText: 'Unknown',
      };
    }
  };

  const evolutionData = getEvolutionData();
  imageUrl = evolutionData.imageUrl;
  linkUrl = evolutionData.linkUrl;
  altText = evolutionData.altText;

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <a href={linkUrl} target="_blank" rel="noopener noreferrer">
        <img src={imageUrl} alt={altText} />
      </a>
    </div>
  );
};

export default EvolutionImage;
