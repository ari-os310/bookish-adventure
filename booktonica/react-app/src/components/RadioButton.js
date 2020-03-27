import React, { Component } from 'react';
import {
  sortNewFirst,
  sortOldFirst,
  sortByABC
} from '../helpers/booktonica-api-fetcher';

class SortButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: ''
    };
  }

  handleOptionChange = event => {
    this.setState({
      selectedOption: event.currentTarget.value
    });
    console.log('View by', event.target.value);
  };

  handleFormSubmit = event => {
    event.preventDefault();

    console.log('You have submitted:', this.state.selectedOption);
  };

  componentDidMount() {
    sortByABC().then(sortBy => this.setState({ selectedOption: sortBy }));
    sortOldFirst().then(sortBy => this.setState({ selectedOption: sortBy }));
    sortNewFirst().then(sortBy => this.setState({ selectedOption: sortBy }));
  }

  render() {
    return (
      <div>
        <input
          type='radio'
          value='newest'
          onChange={this.handleOptionChange}
          onSubmit={this.handleFormSubmit}
        />
        Most Recently Published
        <input
          type='radio'
          value='oldest'
          onChange={this.handleOptionChange}
          onSubmit={this.handleFormSubmit}
        />
        Published Long Ago
        <input
          type='radio'
          value='abc'
          onChange={this.handleOptionChange}
          onSubmit={this.handleFormSubmit}
        />
        View Alphabetically
      </div>
    );
  }
}

export default SortButton;
