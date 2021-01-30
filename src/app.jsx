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

  hanledAdd = () => {
    const value = document.querySelector('.add-input').value;
    if (value) {
      let habits = [...this.state.habits];
      let id = habits[habits.length - 1].id;
      const newHabits = [{ id: ++id, name: `${value}`, count: 0 }];
      habits = this.state.habits.concat(newHabits);
      this.setState({ habits: habits });
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
          <input className="add-input" type="text" placeholder="Habit" />
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
