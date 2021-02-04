import React, { memo, useRef } from 'react';

const Add = memo(props => {
  const formRef = useRef();
  const inputRef = useRef();

  const onSubmit = e => {
    e.preventDefault();
    const value = inputRef.current.value;
    value && props.onAdd(value);
    formRef.current.reset();
  };

  return (
    <form ref={formRef} className="add-form" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        className="add-input"
        type="text"
        placeholder="Habit"
      />
      <button className="add-button">Add</button>
    </form>
  );
});

export default Add;
