import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import RootReducer from './rootReducer';

const store = createStore(RootReducer, compose(applyMiddleware(thunk)));

export type RootStore = ReturnType<typeof RootReducer>;

export default store;
