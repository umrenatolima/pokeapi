import { Dispatch } from 'redux';

import pokeAPI from '../../services/pokeAPI';
import { Pokemon } from '../../types/Pokemon';
import { getUniqueArray } from '../../utils/getUniqueArray';
import parsePokeAPIFactory from '../../utils/parsePokeAPIFactory';
import { RootStore } from '../store';
import {
  PokemonsDispatchTypes,
  POKEMONS_FAIL,
  POKEMONS_LOADING,
  POKEMONS_SUCCESS,
  POKEMONS_UPDATE,
} from './pokemons.types';

interface IGetPokemonParams {
  page: number;
  concat?: boolean;
}

export const getPokemons = ({
  page,
  concat = false,
}: IGetPokemonParams) => async (
  dispatch: Dispatch<PokemonsDispatchTypes>,
  getState: () => RootStore,
): Promise<void> => {
  dispatch({ type: POKEMONS_LOADING });

  const {
    pokemons: { pokemons },
  } = getState();

  try {
    const {
      data: { results },
    } = await pokeAPI.get(`pokemon?limit=16&offset=${page * 16}`);

    const { parse } = parsePokeAPIFactory();
    const parsedPokemonData = parse(results);

    const concatPokemonData =
      pokemons && concat
        ? getUniqueArray({ currentData: pokemons, newData: parsedPokemonData })
        : parsedPokemonData;

    dispatch({
      type: POKEMONS_SUCCESS,
      payload: concatPokemonData,
    });
  } catch (error) {
    dispatch({
      type: POKEMONS_FAIL,
      payload: error,
    });
  }
};

export const getPokemonsByName = (pokemonName: string) => async (
  dispatch: Dispatch<PokemonsDispatchTypes>,
): Promise<void> => {
  dispatch({ type: POKEMONS_LOADING });

  try {
    const { data: pokemonData } = await pokeAPI.get(`pokemon/${pokemonName}`);

    const { parseByName } = parsePokeAPIFactory();
    const parsedPokemonData = parseByName(pokemonData);

    dispatch({
      type: POKEMONS_SUCCESS,
      payload: parsedPokemonData,
    });
  } catch (error) {
    dispatch({
      type: POKEMONS_FAIL,
      payload: error,
    });
  }
};

export const updatePokemons = (pokemons: Pokemon[]) => async (
  dispatch: Dispatch<PokemonsDispatchTypes>,
): Promise<void> => {
  dispatch({
    type: POKEMONS_UPDATE,
    payload: pokemons,
  });
};
