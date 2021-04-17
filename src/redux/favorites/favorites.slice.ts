import { createSlice } from '@reduxjs/toolkit';

import { favoritesReducers } from './favorites.reducers';
import { initialState } from './favorites.state';

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: favoritesReducers,
});
