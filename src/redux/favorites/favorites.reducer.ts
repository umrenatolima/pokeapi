import { initialState } from '.';
import { FavoritesState } from './favorites.state';
import { FavoritesDispatchTypes, UPDATE_FAVORITES } from './favorites.types';

export const favoritesReducer = (
  state = initialState,
  action: FavoritesDispatchTypes,
): FavoritesState => {
  switch (action.type) {
    case UPDATE_FAVORITES:
      return {
        favoritePokemons: action.payload.favoritePokemons,
      };
    default:
      return state;
  }
};
