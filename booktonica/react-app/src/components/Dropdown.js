import React, { Component } from 'react';
import { getAllGenres, getBooksByGenre } from '../helpers/booktonica-api-fetcher';

class GenreMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { genre: [] };
  }

  handleChange = event => {
    this.setState({ genre: event.target.value });
  };

  handleSubmit = event => {
    console.log('View books by: ' + this.state.genre);
    event.preventDefault();
  };

  componentDidMount() {
    getAllGenres().then(genres => this.setState({ genre: genres }));
    console.log('This state', this.state.genre)
  }

  componentDidMount() {
    getBooksByGenre().then(genres => this.setState({ genre: genres }));
    console.log('This state', this.state.genre)
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Sort by genre : <br />
          <select value={this.state.genre} onChange={this.handleChange}>
            <option value='Comic'>Comic</option>
            <option value='Feminism'>Feminism</option>
            <option value='Graphic Novel'>Graphic Novel</option>
            <option value='Humor'>Humor</option>
            <option value='Memoir'>Memoir</option>
            <option value='Nonfiction'>Nonfiction</option>
            <option value='Science Fiction'>Science Fiction</option>
          </select>
        </label>
        <input type='submit' value='Submit' />
      </form>
    );
  }
}

export default GenreMenu;
