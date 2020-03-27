import React, { Component } from 'react';

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookSearch: [],
      searching: []
    };
  }

  updateSearch = event => {
    this.setState({ bookSearch: event.target.value });
  };

  addSearchedToState = books => {
    this.setState({ bookSearch: [] });
    this.setState({ searching: [] });
  };
  
  

  render() {
    // let filteredBooks = this.props.books.filter(book => {
    //   return book.title.toLowerCase().indexOf(this.state.search) !== -1;
    // });

    return (
      <div>
        <input
          id='search'
          label='Search'
          margin='normal'
          type='text'
          value={this.state.bookSearch}
          onChange={this.updateSearch}
        />
      </div>
    );
  }
}

export default SearchBox;
