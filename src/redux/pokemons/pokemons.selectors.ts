import { PokemonsState } from '.';
import { RootStore } from '../store';

export const selectPokemons = (state: RootStore): PokemonsState =>
  state.pokemons;
