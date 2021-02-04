import React, { memo } from 'react';

const Reset = memo(props => {
  return (
    <button className="habits-reset" onClick={props.onReset}>
      Reset All
    </button>
  );
});

export default Reset;
