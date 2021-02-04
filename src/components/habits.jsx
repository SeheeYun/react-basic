import React from 'react';
import Habit from './habit';

const Habits = ({ habitsProps, onIncrement, onDecrement, onDelet }) => {
  return (
    <ul className="habits-list">
      {habitsProps.map(habit => (
        <Habit
          key={habit.id}
          habit={habit}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onDelet={onDelet}
        />
      ))}
    </ul>
  );
};

export default Habits;
