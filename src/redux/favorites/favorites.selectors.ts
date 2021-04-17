import { RootStore } from '../store';
import { FavoritesState } from './favorites.state';

export const selectFavorites = (state: RootStore): FavoritesState =>
  state.favorites;
