import { Dispatch } from 'react';
import { PokemonDTO } from '../pokemons';
import { RootStore } from '../store';
import { FavoritesDispatchTypes, UPDATE_FAVORITES } from './favorites.types';

export const updateFavoritePokemons = (pokemon: PokemonDTO) => (
  dispatch: Dispatch<FavoritesDispatchTypes>,
  getState: () => RootStore,
): void => {
  const {
    favorites: { favoritePokemons },
  } = getState();

  const foundIndex = favoritePokemons.findIndex(
    favorite => favorite.id === pokemon.id,
  );

  let updatedFavorites = [];
  if (foundIndex > -1) {
    updatedFavorites = [...favoritePokemons];
    updatedFavorites.splice(foundIndex, 1);
  } else {
    updatedFavorites = [...favoritePokemons, pokemon];
  }

  localStorage.setItem('@pokeAPI:favorites', JSON.stringify(updatedFavorites));

  dispatch({
    type: UPDATE_FAVORITES,
    payload: {
      favoritePokemons: updatedFavorites,
    },
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
      payload: {
        favoritePokemons: parsedFavorites,
      },
    });
  }
};
