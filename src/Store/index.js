import { createStore } from 'redux';

import RootReducer from './modules/rootReducer';

const middlewares = [];

const store = createStore(RootReducer, middlewares);

export default store;
