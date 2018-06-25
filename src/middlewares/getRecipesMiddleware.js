import axios from 'axios';
import { LOAD_RECIPES, fetchRecipes } from '../reducers/recipes';

const url = 'https://rawgit.com/andomorphia/18c19a7d65838ea4e1090168d6b3689b/raw/f51ffb840351878785f2c0fb59ca361e50848966/recipes.json';

export default store => next => (action) => {
  switch (action.type) {
    case LOAD_RECIPES:
      axios
        .get(url)
        .then((response) => {
          store.dispatch(fetchRecipes(response.data.recipes));
        });
      break;

    default:
  }

  // Nothing to do here - keep calm and carry on
  next(action);
};
