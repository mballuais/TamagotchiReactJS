import { configureStore } from "@reduxjs/toolkit";
import { pokeSlice } from "./slices/pokeSlice";


export const store = configureStore({
    reducer: {
        pokemon: pokeSlice.reducer
    }
})

