import { Pokemon } from '../../types/Pokemon';

export interface FavoritesState {
  favoritePokemons: Pokemon[];
  showOnlyFavorites: boolean;
}

export const initialState: FavoritesState = {
  favoritePokemons: [],
  showOnlyFavorites: false,
};
