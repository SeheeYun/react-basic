import React, { PureComponent } from 'react';

class Nav extends PureComponent {
  render() {
    return (
      <nav className="navbar">
        <i className="navbar-logo fas fa-feather-alt"></i>
        Habit Tracker
        <span className="navbar-count">{this.props.habitCount}</span>
      </nav>
    );
  }
}

export default Nav;
