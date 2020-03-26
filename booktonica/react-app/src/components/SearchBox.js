import React, { Component } from 'react';

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = { search: 'Search Books...' };
  }

  updateSearch = event => {
    this.setState({ search: event.target.value });
  };

  render() {
    // let filteredBooks = this.props.books.filter(book => {
    //   return book.title.toLowerCase().indexOf(this.state.search) !== -1;
    // });

    return (
      <div>
        <input
          type='text'
          value={this.state.search}
          onChange={this.updateSearch}
        />
      </div>
    );
  }
}

export default SearchBox;
