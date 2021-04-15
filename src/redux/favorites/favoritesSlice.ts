/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import PokemonDTO from '../../dtos/PokemonDTO';
import type { RootState } from '../store';

interface FavoritesState {
  pokemons: PokemonDTO[];
}

const initialState: FavoritesState = {
  pokemons: [],
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<PokemonDTO[]>) => {
      state.pokemons = action.payload;

      localStorage.setItem(
        '@pokeAPI:favorites',
        JSON.stringify(state.pokemons),
      );
    },
    remove: (state, action: PayloadAction<PokemonDTO[]>) => {
      state.pokemons = action.payload;

      localStorage.setItem(
        '@pokeAPI:favorites',
        JSON.stringify(action.payload),
      );
    },
    get: state => {
      const cachedFavorites = localStorage.getItem('@pokeAPI:favorites');

      if (cachedFavorites) {
        const parsedFavorites = JSON.parse(cachedFavorites);

        state.pokemons = parsedFavorites;
      } else {
        state.pokemons = [];
      }
    },
  },
});

export const { add, remove, get } = favoritesSlice.actions;

export const selectFavorites = (state: RootState) => state.favorites.pokemons;

export default favoritesSlice.reducer;
