import React from 'react';
import PropTypes from 'prop-types';

import Spinner from './Spinner';
import BackButton from './BackButton';

const Recipe = ({ recipe, loaded }) => {
  if (!loaded) {
    return <Spinner />;
  }

  let recipeSteps;

  if (recipe.analyzedInstructions.length > 0) {
    recipeSteps = recipe.analyzedInstructions[0].steps;
  }

  return (
    <section className="recipe">
      <BackButton />

      <h1 className="recipe__title">{recipe.title}</h1>
      <div className="recipe__header">
        <img className="recipe__img" src={recipe.image} alt={recipe.title} />
        <div className="recipe__info">
          <div className="recipe__info-item">
            <i className="far fa-clock recipe__info-item-icon" />
            <div>
              <div className="recipe__info-item-label">Preparation Time</div>
              <div>{recipe.preparationMinutes ? `${recipe.preparationMinutes} min` : '-'}</div>
            </div>
          </div>
          <div className="recipe__info-item">
            <i className="far fa-clock recipe__info-item-icon" />
            <div>
              <div className="recipe__info-item-label">Cooking Time</div>
              <div>{recipe.cookingMinutes ? `${recipe.cookingMinutes} min` : '-'}</div>
            </div>
          </div>
          <div className="recipe__info-item">
            <i className="far fa-clock recipe__info-item-icon" />
            <div>
              <div className="recipe__info-item-label">Ready in</div>
              <div>{recipe.readyInMinutes ? `${recipe.readyInMinutes} min` : 'N/A'}</div>
            </div>
          </div>
          <div className="recipe__info-item">
            <i className="fas fa-utensils recipe__info-item-icon" />
            <div>
              <div className="recipe__info-item-label">Servings</div>
              <div>{recipe.servings}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="recipe__content">
        <div className="recipe__ingredients">
          <h3 className="recipe__content-title">Ingredients</h3>
          {recipe.extendedIngredients ? (
            recipe.extendedIngredients.map(ingredient => (
              <div
                key={ingredient.id}
                className="recipe__ingredient"
              >
                {ingredient.original}
              </div>
            ))
          ) : (
            <div className="recipe__ingredient">
              {'Information not available.'}
            </div>
          )}
        </div>

        <div className="recipe__steps">
          <h3 className="recipe__content-title">Cooking procedure</h3>
          {recipeSteps ? (
            recipeSteps.map(recipeStep => (
              <div
                key={recipeStep.number}
                className="recipe__step"
              >
                <span className="recipe__step-num">{recipeStep.number}</span>
                <span className="recipe__step-desc">{recipeStep.step}</span>
              </div>
            ))
          ) : (
            <div className="recipe__step">
              {recipe.instructions ? recipe.instructions : 'No instructions available.'}
            </div>
          )}
        </div>
      </div>

      <BackButton />
    </section>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.object,
  loaded: PropTypes.bool.isRequired,
};

Recipe.defaultProps = {
  recipe: {},
};

export default Recipe;
