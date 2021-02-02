import React, { PureComponent } from 'react';

class Reset extends PureComponent {
  render() {
    return (
      <button className="habits-reset" onClick={this.props.onReset}>
        Reset All
      </button>
    );
  }
}

export default Reset;
