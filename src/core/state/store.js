import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducer';

const middlewares = [thunk];
const initialState = [];

const store = createStore(rootReducer, initialState, applyMiddleware(...middlewares));

export default store;