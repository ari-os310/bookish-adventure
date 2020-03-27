import React, { Component } from 'react';
import './App.css';
import { getAllBooks } from './helpers/booktonica-api-fetcher';
import BookCardList from './components/BookCardList';
import Dropdown from './components/Dropdown';
import SearchBox from "./components/SearchBox";
import SortButton from './components/RadioButton';
import Reset from './components/Reset';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
      // search: 'Search Books...'
    };
    this.initialstate = {...this.state};
  }

  componentDidMount() {
    getAllBooks().then(books => this.setState({ books: books }));
  }

  handleReset = event => {
    event.preventDefault();
    this.setState(this.initialState);
  };

  render() {

    return (
      <div className='App'>
        <Dropdown /> 
        <SortButton />
        <SearchBox />
        <BookCardList books={this.state.books} />
        <Reset onClick = {this.handleReset}/>
      </div>
    );
  }
}

export default App;
