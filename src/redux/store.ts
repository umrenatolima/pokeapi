import { configureStore } from '@reduxjs/toolkit';

import { favoritesSlice } from './favorites/favoritesSlice';

const store = configureStore({
  reducer: {
    favorites: favoritesSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
