import { PokemonDTO } from '.';

export interface PokemonsState {
  pokemons: PokemonDTO[] | null;
  isLoading: boolean;
  error: string | null;
}

export const initialState: PokemonsState = {
  pokemons: null,
  isLoading: false,
  error: null,
};
