import { initialState } from '.';
import { FavoritesState } from './favorites.state';
import {
  FavoritesDispatchTypes,
  SET_FAVORITES_VISIBILITY,
  UPDATE_FAVORITES,
} from './favorites.types';

export const favoritesReducer = (
  state = initialState,
  action: FavoritesDispatchTypes,
): FavoritesState => {
  switch (action.type) {
    case UPDATE_FAVORITES:
      return {
        ...state,
        favoritePokemons: action.payload,
      };
    case SET_FAVORITES_VISIBILITY:
      return {
        ...state,
        showOnlyFavorites: action.payload,
      };
    default:
      return state;
  }
};
