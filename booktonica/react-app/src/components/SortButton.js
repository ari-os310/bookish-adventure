import React, { Component } from 'react';

class SortButton extends Component {
  render() {
    return (
      <div>
        <input
          type='radio'
          value='newest'
          name='sortBooks'
          onChange={this.props.sortNew}
        />
        Most Recently Published
        <input
          type='radio'
          value='oldest'
          name='sortBooks'
          onChange={this.props.sortOld}
        />
        Published Long Ago
        <input
          type='radio'
          value='abc'
          name='sortBooks'
          onChange={this.props.sortABC}
        />
        View Alphabetically
      </div>
    );
  }
}

export default SortButton;
