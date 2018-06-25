import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import 'normalize.css/normalize.css';
import './styles/style.scss';

import AppRouter from './routers/AppRouter';
import store from './store/configureStore';
import { loadRecipes } from './reducers/recipes';

const rootComponent = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

document.addEventListener('DOMContentLoaded', () => {
  render(rootComponent, document.getElementById('app'));

  // Get recipes data here so that data is still
  // available on page refresh
  store.dispatch(loadRecipes());
});
