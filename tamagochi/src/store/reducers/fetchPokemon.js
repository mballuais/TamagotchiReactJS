import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPokemon = createAsyncThunk('pokemon/fetchPokemon', async (payload = null) => {
    // https://pokeapi.co/api/v2/type/{id or name}/
    const config = {
        url: "https://pokeapi.co/api/v2/pokemon/" + payload,
        method: 'get',
    }

    const response = await axios(config).then((res) => {
        // console.log("Response Got :", res)
        return res;
    }).catch((error) => {
        console.error("ERR :", error)
        return error;
    })


    return response.data;


})