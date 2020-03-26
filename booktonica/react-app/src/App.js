import React, { Component } from 'react';
import './App.css';
import { getAllBooks } from './helpers/booktonica-api-fetcher';
import BookCardList from './components/BookCardList';
// import SearchBox from "./components/SearchBox";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      search: 'Search Books...'
    };
  }

  componentDidMount() {
    getAllBooks().then(books => this.setState({ books: books }));
  }

  updateSearch = event => {
    this.setState({ search: event.target.value });
  };

  render() {
    let filteredBooks = this.state.books.filter(book => {
      return (
        book.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
      );
    });

    return (
      <div className='App'>
        <input
          type='text'
          value={this.state.search}
          onChange={this.updateSearch}
        />
        <BookCardList books={this.state.books} />
      </div>
    );
  }
}

export default App;
