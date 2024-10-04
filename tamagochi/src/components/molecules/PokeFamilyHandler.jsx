import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PokeApi from '../organisms/PokeApi'
import { fetchPokemon } from '../../store/reducers';
import { getRandomItem } from '../../jinfunctions';

const PokeFamilyHandler = ({ age }) => {
    const [step, setStep] = useState(0);
    const dispatch = useDispatch()
    const evolutions = useSelector((state) => {
        return state.pokemon.pokemonByEvolution.evolves_to
    })


    useEffect(() => {
        console.log("EVOLUTIONS", evolutions)

        if (evolutions.length) {
            if (age > 15) {
                console.log(evolutions)
                dispatch(fetchPokemon(getRandomItem(evolutions).species.name));
                getRandomItem(evolutions)
            }
        }
    }, [age])
    return (
        <><PokeApi></PokeApi></>
    )
}

export default PokeFamilyHandler