import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPokemonSpecies = createAsyncThunk('pokemon/fetchPokemonSpecies', async (payload = null) => {
    const config = {
        url: "https://pokeapi.co/api/v2/pokemon-species/" + payload + "/",
        method: 'get',
    }

    const response = await axios(config).then((res) => {
        return res;
    }).catch((error) => {
        console.error("ERR :", error)
        return error;
    })


    return response.data;


})