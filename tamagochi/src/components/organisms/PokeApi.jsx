import React, { useEffect, useState } from 'react'
import { fetchPokemon } from '../../store/reducers';
import { useDispatch, useSelector } from 'react-redux';
import Pokedisplay from '../atoms/Pokedisplay';
const PokeApi = () => {
    const dispatch = useDispatch();
    const pokemon = useSelector((state) => {
        return state?.pokemon?.pokemon
    })
    const pokemonStatus = useSelector((state) => {
        return state?.pokemon?.status
    })
    const [dataLoaded, setDataLoaded] = useState(pokemonStatus)


    useEffect(() => {
        setDataLoaded(pokemonStatus)
        console.log(pokemon);

    }, [pokemonStatus])


    return (
        <div>


            {pokemon !== null ? <Pokedisplay {...pokemon} ></Pokedisplay> :
                dataLoaded === 'succeed' ?
                    <div>{pokemon?.name} Loaded</div> :
                    dataLoaded === 'idle' || dataLoaded === "pending" ? <div>En chargement</div> : <div>Erreur</div>

            }


        </div>
    )
}

export default PokeApi