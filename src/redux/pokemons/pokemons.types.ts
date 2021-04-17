/* eslint-disable camelcase */
interface Type {
  name: string;
  url: string;
}

export interface Types {
  slot: number;
  type: Type;
}

interface Stat {
  name: string;
  url: string;
}

export interface Stats {
  stat: Stat;
  effort: number;
  base_stat: number;
}

export interface PokemonDTO {
  name: string;
  imgURL: string;
  id: number;
  types?: Types[];
  stats?: Stats[];
}

export const POKEMONS_LOADING = 'POKEMONS_LOADING';
export const POKEMONS_FAIL = 'POKEMONS_FAIL';
export const POKEMONS_SUCCESS = 'POKEMONS_SUCCESS';
export const POKEMONS_UPDATE = 'POKEMONS_UPDATE';

export interface PokemonsLoading {
  type: typeof POKEMONS_LOADING;
}

export interface PokemonsSuccess {
  type: typeof POKEMONS_SUCCESS;
  payload: PokemonDTO[];
}

export interface PokemonsUpdate {
  type: typeof POKEMONS_UPDATE;
  payload: PokemonDTO[];
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
