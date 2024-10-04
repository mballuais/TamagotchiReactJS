import { createSlice } from "@reduxjs/toolkit";
import { fetchPokemon, fetchPokemonByType, fetchPokemonEvolution, fetchPokemonSpecies } from "../reducers";

export const pokeSlice = createSlice({
    name: 'pokemon',
    initialState: {
        pokemon: null,
        status: 'idle',
        pokemonByType: [],
        pokemonByEvolution: [],
        pokemonSpecies: [],
        pokemonByTypeStatus: 'idle',
        pokemonByEvolutionStatus: 'idle',
        pokemonSpeciesStatus: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchPokemon.pending, (state, action) => {
                state.status = "pending";
            })
            .addCase(fetchPokemon.fulfilled, (state, action) => {
                state.status = "succeed";
                console.log(action.payload)
                state.pokemon = action.payload;
            })
            .addCase(fetchPokemon.rejected, (state, action) => {
                console.error("FAILED !!!")
                state.status = "failed"
            })
            .addCase(fetchPokemonByType.pending, (state, action) => {
                state.pokemonByTypeStatus = "pending";
            })
            .addCase(fetchPokemonByType.fulfilled, (state, action) => {
                state.pokemonByTypeStatus = "succeed";
                state.pokemonByType = action.payload.pokemon;
            })
            .addCase(fetchPokemonByType.rejected, (state, action) => {
                state.pokemonByTypeStatus = "failed"
            })
            .addCase(fetchPokemonEvolution.pending, (state, action) => {
                state.pokemonByEvolutionStatus = "pending";
            })
            .addCase(fetchPokemonEvolution.fulfilled, (state, action) => {
                state.pokemonByEvolutionStatus = "succeed";
                state.pokemonByEvolution = action.payload.chain;
            })
            .addCase(fetchPokemonEvolution.rejected, (state, action) => {
                console.error("FAILED !!!")
                state.pokemonByEvolution = "failed"
            })
            .addCase(fetchPokemonSpecies.pending, (state, action) => {
                state.pokemonSpeciesStatus = "pending";
            })
            .addCase(fetchPokemonSpecies.fulfilled, (state, action) => {
                state.pokemonSpeciesStatus = "succeed";
                console.log("PAYLOAD", action.payload)
                state.pokemonSpecies = action.payload;
            })
            .addCase(fetchPokemonSpecies.rejected, (state, action) => {
                console.error("FAILED !!!")
                state.pokemonSpeciesStatus = "failed"
            })
    }
})

