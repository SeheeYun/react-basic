import React, { Component } from 'react';

class Habit extends Component {
  handleIncrement = () => {
    this.props.onIncrement(this.props.habitProps);
  };

  handleDecrement = () => {
    this.props.onDecrement(this.props.habitProps);
  };

  handleDelet = () => {
    this.props.onDelet(this.props.habitProps);
  };

  render() {
    const { name, count } = this.props.habitProps;
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncrement}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.handleDecrement}
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <button
          className="habit-button habit-delete"
          onClick={this.handleDelet}
        >
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
