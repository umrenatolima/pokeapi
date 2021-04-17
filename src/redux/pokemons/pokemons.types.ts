import { Pokemon } from '../../types/Pokemon';

export const POKEMONS_LOADING = 'POKEMONS_LOADING';
export const POKEMONS_FAIL = 'POKEMONS_FAIL';
export const POKEMONS_SUCCESS = 'POKEMONS_SUCCESS';
export const POKEMONS_UPDATE = 'POKEMONS_UPDATE';

export interface PokemonsLoading {
  type: typeof POKEMONS_LOADING;
}

export interface PokemonsSuccess {
  type: typeof POKEMONS_SUCCESS;
  payload: Pokemon[];
}

export interface PokemonsUpdate {
  type: typeof POKEMONS_UPDATE;
  payload: Pokemon[];
}

export interface PokemonsFail {
  type: typeof POKEMONS_FAIL;
  payload: {
    error: string;
  };
}

export type PokemonsDispatchTypes =
  | PokemonsLoading
  | PokemonsFail
  | PokemonsSuccess
  | PokemonsUpdate;
