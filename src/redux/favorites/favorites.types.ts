import { Pokemon } from '../../types/Pokemon';

export const UPDATE_FAVORITES = 'UPDATE_FAVORITES';
export const SET_FAVORITES_VISIBILITY = 'SET_FAVORITES_VISIBILITY';

export interface UPDATE_FAVORITES {
  type: typeof UPDATE_FAVORITES;
  payload: Pokemon[];
}

export interface SET_FAVORITES_VISIBILITY {
  type: typeof SET_FAVORITES_VISIBILITY;
  payload: boolean;
}

export type FavoritesDispatchTypes =
  | UPDATE_FAVORITES
  | SET_FAVORITES_VISIBILITY;
