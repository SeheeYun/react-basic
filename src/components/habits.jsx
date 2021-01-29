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
    this.setState({ count: (habit.count += 1) });
  };

  handleDecrement = habit => {
    this.setState({ count: habit.count <= 0 ? 0 : (habit.count -= 1) });
  };

  handleDelet = habit => {
    const { habits } = this.state;
    this.setState({
      habits: habits.filter(item => item.id !== habit.id),
    });
  };

  render() {
    return (
      <ul>
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
