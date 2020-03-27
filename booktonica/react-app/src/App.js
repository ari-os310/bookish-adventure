import React, { Component } from 'react';
import './App.css';
import { getAllBooks } from './helpers/booktonica-api-fetcher';
import BookCardList from './components/BookCardList';
import GenreMenu from './components/Dropdown';
import SearchBox from "./components/SearchBox";
import SortButton from './components/RadioButton';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
      // search: 'Search Books...'
    };
  }

  componentDidMount() {
    getAllBooks().then(books => this.setState({ books: books }));
  }

  render() {

    return (
      <div className='App'>
        <GenreMenu /> 
        <SortButton />
        <SearchBox />
        <BookCardList books={this.state.books} />
      </div>
    );
  }
}

export default App;
