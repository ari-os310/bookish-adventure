import React, { Component } from 'react';
import './App.css';
import { getAllBooks, getBooksByGenre } from './helpers/booktonica-api-fetcher';
import BookCardList from './components/BookCardList';
import Dropdown from './components/Dropdown';
import SearchBox from './components/SearchBox';
import SortButton from './components/RadioButton';
import Reset from './components/Reset';

const initialState = {
  books: [],
  search: 'Search Books...',
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {...initialState };
  }

  componentDidMount() {
    getAllBooks().then((books) => this.setState({ books: books }));
  }

  resetState = () => {
    this.setState(initialState);
  };

  filterByGenre = (genre) => {
    getBooksByGenre(genre).then((books) => this.setState({ books: books }));
  };

  render() {
    return (
      <div className='App'>
        <Dropdown filter={this.filterByGenre} />
        <SortButton />
        <SearchBox />
        <BookCardList books={this.state.books} />
        <Reset reset={this.resetState} />
      </div>
    );
  }
}

export default App;
