import React, { Component } from 'react';
import { getAllGenres } from '../helpers/booktonica-api-fetcher';

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genres: [],
      selectedGenre: []
    };
  }

  handleSubmit = event => {
    event.preventDefault();
  };

  componentDidMount() {
    getAllGenres().then(genres => this.setState({ selectedGenre: genres }));
  }
  
  render() {
    return (
      <div className='drop-down'>
        <form onSubmit={this.handleSubmit}>
          <label>
            Sort by genre : <br />
            <select>
              {this.state.selectedGenre.map(genre => (
                <option value='genre.value'>{genre.genre}</option>
              ))}
            </select>
          </label>
          <input type='submit' value='Submit' />
        </form>
      </div>
    );
  }
}

export default Dropdown;
