// Initial state
const recipesReducerDefaultState = {
  recipes: [],
  loaded: false,
};

// Types
export const LOAD_RECIPES = 'LOAD_RECIPES';
export const FETCH_RECIPES = 'FETCH_RECIPES';

// Action Creators
export const loadRecipes = () => ({
  type: LOAD_RECIPES,
});

export const fetchRecipes = recipes => ({
  type: FETCH_RECIPES,
  recipes,
});

// Reducer
export default (state = recipesReducerDefaultState, action) => {
  switch (action.type) {
    case LOAD_RECIPES:
      return {
        ...state,
      };

    case FETCH_RECIPES:
      return {
        ...state,
        recipes: action.recipes,
        loaded: true,
      };

    default:
      return state;
  }
};
