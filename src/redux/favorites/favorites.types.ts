import { Pokemon } from '../../types/Pokemon';

export const UPDATE_FAVORITES = 'UPDATE_FAVORITES';

export interface UPDATE_FAVORITES {
  type: typeof UPDATE_FAVORITES;
  payload: {
    favoritePokemons: Pokemon[];
  };
}

export type FavoritesDispatchTypes = UPDATE_FAVORITES;
