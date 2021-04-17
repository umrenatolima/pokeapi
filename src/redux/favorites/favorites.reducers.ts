import { PayloadAction } from '@reduxjs/toolkit';

import PokemonDTO from '../../dtos/PokemonDTO';
import { FavoritesState } from './favorites.state';

export const favoritesReducers = {
  add: (
    state: FavoritesState,
    action: PayloadAction<PokemonDTO[]>,
  ): FavoritesState => {
    const pokemons = action.payload;

    localStorage.setItem('@pokeAPI:favorites', JSON.stringify(pokemons));

    return {
      ...state,
      pokemons,
    };
  },

  remove: (
    state: FavoritesState,
    action: PayloadAction<PokemonDTO[]>,
  ): FavoritesState => {
    const pokemons = action.payload;

    localStorage.setItem('@pokeAPI:favorites', JSON.stringify(pokemons));

    return {
      ...state,
      pokemons,
    };
  },

  get: (state: FavoritesState): FavoritesState => {
    const cachedFavorites = localStorage.getItem('@pokeAPI:favorites');

    if (cachedFavorites) {
      const parsedFavorites = JSON.parse(cachedFavorites);

      return {
        ...state,
        pokemons: parsedFavorites,
      };
    }

    return {
      ...state,
      pokemons: [],
    };
  },
};
