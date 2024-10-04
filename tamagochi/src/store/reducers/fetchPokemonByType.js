import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPokemonByType = createAsyncThunk('pokemon/fetchPokemonByType', async (payload = "fire") => {
    // 
    const config = {
        url: "https://pokeapi.co/api/v2/type/" + payload + "/",
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