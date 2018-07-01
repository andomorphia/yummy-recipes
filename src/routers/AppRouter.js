/*eslint-disable */
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Header from '../components/Header';
import RecipesList from '../containers/RecipesList';
import Recipe from '../containers/Recipe';
import NotFoundPage from '../components/NotFoundPage';
import ScrollToTop from '../components/ScrollToTop';

const AppRouter = () => (
  <Router>
    <ScrollToTop>
      <Route render={({ location }) => (
        <Fragment>
          <Header />
          <div className="container">
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                timeout={250}
                classNames="fade"
              >
                <Switch location={location}>
                  <Route exact path="/" component={RecipesList} />
                  <Route path="/recipe/:slug" component={Recipe} />
                  <Route component={NotFoundPage} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </div>
        </Fragment>
      )} />
    </ScrollToTop>
  </Router>
);

export default AppRouter;
