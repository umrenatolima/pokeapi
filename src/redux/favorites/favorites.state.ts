import { Pokemon } from '../../types/Pokemon';

export interface FavoritesState {
  favoritePokemons: Pokemon[];
}

export const initialState: FavoritesState = {
  favoritePokemons: [],
};
