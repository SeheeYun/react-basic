import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
  handleIncrement = habit => {
    const habits = [...this.props.habitsProps];
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({ habits: habits }); // key : value 가 같으면 생략해서 쓸 수 있다
  };

  handleDecrement = habit => {
    const habits = [...this.props.habitsProps];
    const index = habits.indexOf(habit);
    habits[index].count === 0 || habits[index].count--;
    this.setState({ habits: habits });
  };

  render() {
    const habits = this.props.habitsProps;
    return (
      <ul className="habits-list" onClick={this.props.onHabitsCount}>
        {habits.map(habit => (
          <Habit
            key={habit.id}
            habitProps={habit}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelet={this.props.onDelet}
          />
        ))}
      </ul>
    );
  }
}

export default Habits;
