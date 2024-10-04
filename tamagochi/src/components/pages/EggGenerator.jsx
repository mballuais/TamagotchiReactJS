// src/components/pages/LauncherPage.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PokeApi from '../organisms/PokeApi';
import { fetchPokemon, fetchPokemonByType, fetchPokemonEvolution, fetchPokemonSpecies } from '../../store/reducers';
import { getRandomItem } from '../../jinfunctions';

const EggGenerator = ({ type, onComplete }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const {
    pokemon,
    status,
    pokemonByType,
    pokemonByTypeStatus,
    pokemonByEvolution,
    pokemonByEvolutionStatus,
    pokemonSpeciesStatus,
    pokemonSpecies
  } = useSelector((state) => state.pokemon)


  useEffect(() => {
    dispatch(fetchPokemonByType(type))
  }, []);
  useEffect(() => {
    if (pokemonByTypeStatus === 'succeed') {
      const pokemon = getRandomItem(pokemonByType);
      dispatch(fetchPokemon(pokemon.pokemon.name))
    }
  }, [pokemonByTypeStatus])

  useEffect(() => {
    if (status === 'succeed' && pokemonSpeciesStatus !== "succeed") {
      dispatch(fetchPokemonSpecies(pokemon.species.name))
    } else if (status === 'succeed' && pokemonSpeciesStatus === 'succeed' && pokemonByEvolutionStatus === 'succeed') {
      onComplete()
    }
  }, [status])

  useEffect(() => {
    if (pokemonSpeciesStatus === 'succeed') {

      dispatch(fetchPokemonEvolution(pokemonSpecies.evolution_chain))

    }
  }, [pokemonSpeciesStatus])

  useEffect(() => {
    if (pokemonByEvolutionStatus === 'succeed') {
      dispatch(fetchPokemon(pokemonByEvolution.species.name));

    }
  }, [pokemonByEvolutionStatus])
  return (

    status === 'succeed' && pokemonSpeciesStatus === 'succeed' && pokemonByEvolutionStatus === 'succeed' ? <PokeApi></PokeApi> : <></>

  );




};

export default EggGenerator;
