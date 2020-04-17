import React, { Component } from 'react';

class SearchBar extends Component {
  updateSearch = (event) => {
    let searchInput = event.target.value;
    if (searchInput.length > 0) {
      this.props.searchBookName(searchInput.toLowerCase());
    } else {
      this.props.reset();
    }
  };

  render() {
    return (
      <div className='searchbar'>
        <input
          id='search'
          label='Search'
          placeholder='Search Book...'
          margin='normal'
          type='text'
          onChange={this.updateSearch}
        />
      </div>
    );
  }
}

export default SearchBar;
