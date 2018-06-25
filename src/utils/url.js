import slugify from 'slugify';

/*
 * getSlug
 * generates slug from recipe name
 */
export const getSlug = name => (
  slugify(name, { lower: true, remove: /[$*_+~.()'"!\-:@]/g })
);

/*
 * getRecipeUrl
 * generates formatted recipe url
 */
export const getRecipeUrl = name => `/recipe/${getSlug(name)}`;
