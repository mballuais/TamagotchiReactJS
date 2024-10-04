import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPokemonEvolution = createAsyncThunk('pokemon/fetchPokemonEvolution', async (payload = {
    url: "https://pokeapi.co/api/v2/evolution-chain/1/",
}) => {
    const config = {
        url: payload.url,
        method: 'get',
    }

    const response = await axios(config).then((res) => {
        console.log("Response Got :", res)
        return res;
    }).catch((error) => {
        console.error("ERR :", error)
        return error;
    })


    return response.data;


})