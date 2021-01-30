import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';

class App extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ],
    sum: 0,
  };

  habitsCount = () => {
    console.log('qwewq');
    const sum = this.state.habits.reduce(
      (accumulator, currentValue) => accumulator + currentValue.count,
      0
    );
    this.setState({ sum: sum });
  };

  onKeyDown = e => {
    if (e.keyCode === 13) {
      this.hanledAdd();
    }
  };

  hanledAdd = () => {
    const input = document.querySelector('.add-input');
    if (input.value) {
      const { habits } = this.state;
      let id = habits.length;
      const newHabits = [{ id: ++id, name: `${input.value}`, count: 0 }];
      this.setState({ habits: habits.concat(newHabits) });
      input.value = '';
    }
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
        <div className="navbar">
          <i className="navbar-logo fas fa-feather-alt"></i>
          Habit Tracker
          <span className="navbar-count">{this.state.sum}</span>
        </div>
        <ul>
          <input
            className="add-input"
            type="text"
            placeholder="Habit"
            onKeyDown={this.onKeyDown}
          />
          <button className="add-button" onClick={this.hanledAdd}>
            Add
          </button>
        </ul>
        <Habits
          habitsProps={this.state.habits}
          onHabitsCount={this.habitsCount}
          onDelet={this.handleDelet}
        />
        <button className="habits-reset" onClick={this.hanledReset}>
          Reset All
        </button>
      </>
    );
  }
}

export default App;
