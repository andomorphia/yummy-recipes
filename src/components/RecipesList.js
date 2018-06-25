import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import Spinner from './Spinner';
import { getRecipeUrl } from '../utils/url';

const RecipesList = ({ recipes, loaded }) => (
  <section className="recipes-list">
    <h1 className="recipes-list__title">What do you fancy eating today?</h1>
    <div className="recipes-list__wrapper">
      {/* Display loading anim if recipes are not fetched yet */}
      {!loaded ? (
        <Spinner />
      ) : (
        recipes.map(recipe => (
          <div
            key={recipe.title}
            className="recipes-list__recipe"
          >
            <NavLink
              exact
              to={getRecipeUrl(recipe.title)}
            >
              <h3 className="recipes-list__recipe-title">{recipe.title}</h3>
              <img className="recipes-list__recipe-img" src={recipe.image} alt={recipe.title} />
            </NavLink>
          </div>
        ))
      )}
    </div>
  </section>
);

RecipesList.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  loaded: PropTypes.bool.isRequired,
};

export default RecipesList;
