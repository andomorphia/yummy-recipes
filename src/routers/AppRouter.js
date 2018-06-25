/*eslint-disable */
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
import RecipesList from '../containers/RecipesList';
import Recipe from '../containers/Recipe';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
  <Router>
    <Fragment>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/" component={RecipesList} />
          <Route path="/recipe/:slug" component={Recipe} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Fragment>
  </Router>
);

export default AppRouter;
