import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import {
  getAllBooks,
  getAllGenres,
  getBooksByGenre,
  sortNewFirst,
  sortOldFirst,
  sortByABC,
  searchByBook,
} from './helpers/booktonica-api-fetcher';
import BookCardList from './components/BookCardList';
import Dropdown from './components/Dropdown';
import Searchbar from './components/Searchbar';
import SortButton from './components/SortButton';
import Reset from './components/Reset';

const initialState = {
  books: [],
  genres: [],
  search: 'Search Books...',
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { ...initialState };
  }

  componentDidMount() {
    this.resetBookState();
    getAllGenres().then((genres) => this.setState({ genres: genres }));
  }

  resetBookState = () => {
    getAllBooks().then((books) => this.setState({ books: books }));
  };

  filterByGenre = (genre) => {
    getBooksByGenre(genre).then((books) => this.setState({ books: books }));
  };

  sortNew = () => {
    sortNewFirst().then((books) => this.setState({ books: books }));
  };

  sortOld = () => {
    sortOldFirst().then((books) => this.setState({ books: books }));
  };

  sortABC = () => {
    sortByABC().then((books) => this.setState({ books: books }));
  };

  searchBookName = (bookName) => {
    searchByBook(bookName).then((books) => this.setState({ books: books }));
  };

  render() {
    // console.log("this is state",this.state.genres)
    return (
      <div className='App'>
        <Navbar
          className='navbar justify-content-between'
          sticky='top'
          border-bottom='3px solid rgb(99, 42, 42)'>
          <Dropdown
            genres={this.state.genres}
            books={this.state.books}
            filter={this.filterByGenre}
          />
          <SortButton
            sortNew={this.sortNew}
            sortOld={this.sortOld}
            sortABC={this.sortABC}
          />
          <Searchbar
            searchBookName={this.searchBookName}
            reset={this.resetBookState}
          />
          <Reset reset={this.resetBookState} />
        </Navbar>
        <br />
        <BookCardList books={this.state.books} />
      </div>
    );
  }
}

export default App;
