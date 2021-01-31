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
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({ habits: habits });
  };

  handleDecrement = habit => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count === 0 || habits[index].count--;
    this.setState({ habits: habits });
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
    this.setState({ habits: habits });
  };

  hanledReset = () => {
    const habits = this.state.habits.slice(this.state.habits.length);
    this.setState({ habits: habits });
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
