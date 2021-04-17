import { combineReducers } from 'redux';

import { pokemonsReducer } from './pokemons';
import { favoritesReducer } from './favorites';

const RootReducer = combineReducers({
  pokemons: pokemonsReducer,
  favorites: favoritesReducer,
});

export default RootReducer;
