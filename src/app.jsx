import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import Nav from './components/nav';
import Add from './components/add';
import Reset from './components/reset';

class App extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ],
  };

  handleIncrement = habit => {
    const habits = this.state.habits.map(item => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      } else {
        return item;
      }
    });
    this.setState({ habits });
  };

  handleDecrement = habit => {
    const habits = this.state.habits.map(item => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count <= 0 ? 0 : habit.count - 1 };
      } else {
        return item;
      }
    });
    this.setState({ habits });
  };

  hanledAdd = value => {
    let id =
      this.state.habits.length > 0
        ? this.state.habits[this.state.habits.length - 1].id
        : 0;
    const habits = [...this.state.habits, { id: ++id, name: value, count: 0 }];
    this.setState({ habits });
  };

  handleDelet = habit => {
    const habits = this.state.habits.filter(item => item.id !== habit.id);
    this.setState({ habits });
  };

  hanledReset = () => {
    const habits = this.state.habits.map(habit => {
      if (habit.count === 0) {
        return habit;
      } else {
        return { ...habit, count: 0 };
      }
    });
    this.setState({ habits });
  };

  render() {
    return (
      <>
        <Nav
          habitCount={this.state.habits.filter(item => item.count > 0).length}
        />
        <Add onAdd={this.hanledAdd} />
        <Habits
          habitsProps={this.state.habits}
          onHabitsCount={this.habitsCount}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelet={this.handleDelet}
        />
        <Reset onReset={this.hanledReset} />
      </>
    );
  }
}

export default App;
