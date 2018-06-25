import { createStore, applyMiddleware, compose } from 'redux';

import recipesReducer from '../reducers/recipes';
import getRecipesMiddleware from '../middlewares/getRecipesMiddleware';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */
const store = createStore(
  recipesReducer,
  composeEnhancers(applyMiddleware(getRecipesMiddleware)),
);

export default store;
