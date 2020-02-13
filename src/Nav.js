import React, { Fragment } from 'react';
import { Router, Link } from '@reach/router';
import Description from './Description';
import Home from './Home';
import './Nav.scss';

export default function Nav() {
  const isActive = ({ isCurrent }) => {
    return isCurrent ? { className: 'active' } : null;
  };

  return (
    <Fragment>
      <header className="sticky">
        <nav className="nav">
          <Link getProps={isActive} to="/">
            Laszlo Varga
          </Link>{' '}
          <Link getProps={isActive} to="description">
            Description
          </Link>
        </nav>
      </header>

      <Router>
        <Home path="/" />
        <Description path="/description" />
      </Router>
    </Fragment>
  );
}
