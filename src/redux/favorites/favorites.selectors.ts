import PokemonDTO from '../../dtos/PokemonDTO';
import { RootState } from '../store';

export const selectFavorites = (state: RootState): PokemonDTO[] =>
  state.favorites.pokemons;
