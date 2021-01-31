import React, { Component } from 'react';

class Add extends Component {
  formRef = React.createRef();
  inputRef = React.createRef();

  onSubmit = e => {
    e.preventDefault();
    const value = this.inputRef.current.value;
    value && this.props.onAdd(value);
    // this.inputRef.current.value = '';
    this.formRef.current.reset();
  };

  render() {
    return (
      <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
        <input
          ref={this.inputRef}
          className="add-input"
          type="text"
          placeholder="Habit"
        />
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default Add;
