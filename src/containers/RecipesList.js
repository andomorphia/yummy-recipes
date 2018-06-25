import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import RecipesList from '../components/RecipesList';
import { loadRecipes } from '../reducers/recipes';

// State
const mapStateToProps = state => ({
  recipes: state.recipes,
  loaded: state.loaded,
});

// Actions
const mapDispatchToProps = dispatch => ({
  loadRecipes: () => {
    dispatch(loadRecipes());
  },
});

// Container
const RecipesListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecipesList);

export default withRouter(RecipesListContainer);
