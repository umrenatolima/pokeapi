import { Pokemon } from '../../types/Pokemon';

export interface PokemonsState {
  pokemons: Pokemon[] | null;
  isLoading: boolean;
  error: string | null;
}

export const initialState: PokemonsState = {
  pokemons: null,
  isLoading: false,
  error: null,
};
