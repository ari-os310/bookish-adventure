import React, { Component } from 'react';
import './App.css';
import { getAllBooks, getAllGenres, getBooksByGenre, sortNewFirst, sortOldFirst, sortByABC, searchByBook } from './helpers/booktonica-api-fetcher';
import BookCardList from './components/BookCardList';
import Dropdown from './components/Dropdown';
import SearchBox from './components/SearchBox';
import SortButton from './components/SortButton';
import Reset from './components/Reset';

const initialState = {
  books: [],
  genres : [],
  search: 'Search Books...',
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {...initialState };
  }

  componentDidMount() {
    getAllBooks().then((books) => this.setState({ books: books }));
    getAllGenres().then((genres) => this.setState({ genres: genres }));
    
  }

  resetState = () => {
    getAllBooks().then((books) => this.setState({ books: books }));
  };

  filterByGenre = (genre) => {
    getBooksByGenre(genre).then((books) => this.setState({ books: books }));
  };

  sortNew = () => {
     sortNewFirst().then((books) => this.setState({ books: books }));
  }

  sortOld = () => {
     sortOldFirst().then((books) => this.setState({ books: books }));
  }
  sortABC = () => {
     sortByABC().then((books) => this.setState({ books: books }));
  }

  searchBookName = (bookName) => {
     searchByBook(bookName).then((books) => this.setState({ books: books }));
  }

  render() {
    // console.log("this is state",this.state.genres)
    return (
      <div className='App'>
        <Dropdown 
          genres={this.state.genres}
          books={this.state.books}
          filter={this.filterByGenre} 
        /> 
        <SearchBox 
          searchBookName={this.searchBookName}
        />
        <SortButton
          sortNew={this.sortNew}
          sortOld={this.sortOld}
          sortABC={this.sortABC}
          />
      
        <BookCardList books={this.state.books} />
        <Reset reset={this.resetState} />
      </div>
    );
  }
}

export default App;
