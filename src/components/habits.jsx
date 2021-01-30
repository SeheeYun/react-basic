import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ],
  };

  handleIncrement = habit => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({ habits: habits }); // key : value 가 같으면 생략해서 쓸 수 있다
  };

  handleDecrement = habit => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count === 0 || habits[index].count--;
    this.setState({ habits: habits });
  };

  handleDelet = habit => {
    const habits = this.state.habits.filter(item => item.id !== habit.id);
    this.setState({ habits: habits });
  };

  render() {
    return (
      <ul className="habits-list">
        {this.state.habits.map(habit => (
          <Habit
            key={habit.id}
            habitProps={habit}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelet={this.handleDelet}
          />
        ))}
      </ul>
    );
  }
}

export default Habits;
