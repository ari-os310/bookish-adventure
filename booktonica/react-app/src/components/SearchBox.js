import React, { Component } from 'react';

class SearchBox extends Component {

  updateSearch = event => {
     if (event.target.value.length > 0) {
      this.props.searchBookName(event.target.value.toLowerCase());
    }
  };

  render() {
    return (
      <div>
        <input
          id='search'
          label='Search'
          placeholder = "Search Book..."
          margin='normal'
          type='text'
          onChange={this.updateSearch}
        />
      </div>
    );
  }
}

export default SearchBox;
