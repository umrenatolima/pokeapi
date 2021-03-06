import { Dispatch } from 'react';

import { Pokemon } from '../../types/Pokemon';
import { RootStore } from '../store';
import {
  FavoritesDispatchTypes,
  SET_FAVORITES_VISIBILITY,
  UPDATE_FAVORITES,
} from './favorites.types';

export const updateFavoritePokemons = (pokemon: Pokemon) => (
  dispatch: Dispatch<FavoritesDispatchTypes>,
  getState: () => RootStore,
): void => {
  const {
    favorites: { favoritePokemons },
  } = getState();

  const foundIndex = favoritePokemons.findIndex(
    favorite => favorite.id === pokemon.id,
  );

  const updatedFavorites =
    foundIndex > -1
      ? [
          ...favoritePokemons.slice(0, foundIndex),
          ...favoritePokemons.slice(foundIndex + 1),
        ]
      : [...favoritePokemons, pokemon];

  localStorage.setItem('@pokeAPI:favorites', JSON.stringify(updatedFavorites));

  dispatch({
    type: UPDATE_FAVORITES,
    payload: updatedFavorites,
  });
};

export const getFavoritePokemonsFromCache = () => (
  dispatch: Dispatch<FavoritesDispatchTypes>,
): void => {
  const cachedFavorites = localStorage.getItem('@pokeAPI:favorites');

  if (cachedFavorites) {
    const parsedFavorites = JSON.parse(cachedFavorites);

    dispatch({
      type: UPDATE_FAVORITES,
      payload: parsedFavorites,
    });
  }
};

export const updateShowOnlyFavorites = (showOnlyFavorites: boolean) => (
  dispatch: Dispatch<FavoritesDispatchTypes>,
): void => {
  dispatch({
    type: SET_FAVORITES_VISIBILITY,
    payload: showOnlyFavorites,
  });
};
