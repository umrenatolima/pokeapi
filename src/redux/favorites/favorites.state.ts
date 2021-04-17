import PokemonDTO from '../../dtos/PokemonDTO';

export interface FavoritesState {
  pokemons: PokemonDTO[];
}

export const initialState: FavoritesState = {
  pokemons: [],
};
