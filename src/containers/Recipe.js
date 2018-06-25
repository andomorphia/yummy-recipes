import { connect } from 'react-redux';

import Recipe from '../components/Recipe';
import { getSlug } from '../utils/url';

// State
const mapStateToProps = (state, ownProps) => {
  const { slug } = ownProps.match.params;
  const recipeData = state.recipes.find(recipe => getSlug(recipe.title) === slug);

  return {
    recipe: recipeData,
    loaded: state.loaded,
  };
};

// Actions
const mapDispatchToProps = {};

// Container
const RecipeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Recipe);

/**
 * Export
 */
export default RecipeContainer;
