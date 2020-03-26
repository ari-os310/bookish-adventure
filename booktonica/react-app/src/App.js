import React, { Component } from "react";
import "./App.css";
import { getAllBooks } from "./helpers/booktonica-api-fetcher";
import BookCardList from "./components/BookCardList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  componentDidMount() {
    getAllBooks().then(books => this.setState({ books: books }));
  }
  render() {
    return (
      <div className="App">
        <BookCardList books={this.state.books} />
      </div>
    );
  }
}

export default App;
