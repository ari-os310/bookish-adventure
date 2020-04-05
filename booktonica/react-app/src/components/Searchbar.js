import React, { Component } from 'react';

class SearchBar extends Component {
  updateSearch = (event) => {
    if (event.target.value.length > 0) {
      this.props.searchBookName(event.target.value.toLowerCase());
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
