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
      let id = this.state.habits[this.state.habits.length - 1].id;
      const newHabits = [{ id: ++id, name: `${input.value}`, count: 0 }];
      const habits = this.state.habits.concat(newHabits);
      this.setState({ habits: habits });
      input.value = '';
    }
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
        />
        <button className="habits-reset">Reset All</button>
      </>
    );
  }
}

export default App;
