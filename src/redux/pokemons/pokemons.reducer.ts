import { initialState, PokemonsState } from './pokemons.state';
import {
  PokemonsDispatchTypes,
  POKEMONS_FAIL,
  POKEMONS_LOADING,
  POKEMONS_SUCCESS,
  POKEMONS_UPDATE,
} from './pokemons.types';

export const pokemonsReducer = (
  state = initialState,
  action: PokemonsDispatchTypes,
): PokemonsState => {
  switch (action.type) {
    case POKEMONS_LOADING:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case POKEMONS_SUCCESS:
      return {
        pokemons: action.payload,
        isLoading: false,
        error: null,
      };
    case POKEMONS_FAIL:
      return {
        pokemons: [],
        isLoading: false,
        error: action.payload,
      };
    case POKEMONS_UPDATE:
      return {
        ...state,
        pokemons: action.payload,
      };
    default:
      return state;
  }
};
