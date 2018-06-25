import React from 'react';
import { NavLink } from 'react-router-dom';

const BackButton = () => (
  <NavLink
    exact
    to="/"
    className="btn--back"
  >
    <i className="fas fa-chevron-left btn--back-icon" />
    Back to recipes
  </NavLink>
);

export default BackButton;
