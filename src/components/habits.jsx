import React from 'react';
import Habit from './habit';

const Habits = props => {
  const habits = props.habitsProps;
  return (
    <ul className="habits-list">
      {habits.map(habit => (
        <Habit
          key={habit.id}
          habit={habit}
          onIncrement={props.onIncrement}
          onDecrement={props.onDecrement}
          onDelet={props.onDelet}
        />
      ))}
    </ul>
  );
};

export default Habits;
