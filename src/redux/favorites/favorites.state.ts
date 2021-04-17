import { PokemonDTO } from '../pokemons';

export interface FavoritesState {
  favoritePokemons: PokemonDTO[];
}

export const initialState: FavoritesState = {
  favoritePokemons: [],
};
