import { PokemonDTO } from '../pokemons';

export const UPDATE_FAVORITES = 'UPDATE_FAVORITES';

export interface UPDATE_FAVORITES {
  type: typeof UPDATE_FAVORITES;
  payload: {
    favoritePokemons: PokemonDTO[];
  };
}

export type FavoritesDispatchTypes = UPDATE_FAVORITES;
