import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
  render() {
    const habits = this.props.habitsProps;
    return (
      <ul className="habits-list">
        {habits.map(habit => (
          <Habit
            key={habit.id}
            habitProps={habit}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            onDelet={this.props.onDelet}
          />
        ))}
      </ul>
    );
  }
}

export default Habits;
