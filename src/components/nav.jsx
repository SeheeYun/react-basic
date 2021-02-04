import React, { memo } from 'react';

const Nav = memo(props => {
  return (
    <nav className="navbar">
      <i className="navbar-logo fas fa-feather-alt"></i>
      Habit Tracker
      <span className="navbar-count">{props.habitCount}</span>
    </nav>
  );
});

export default Nav;
