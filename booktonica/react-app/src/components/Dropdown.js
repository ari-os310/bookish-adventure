import React, { Component } from 'react';

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGenre: 'select a genre',
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({ selectedGenre: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.filter(this.state.selectedGenre);
  };

  render() {
    return (
      <div className='drop-down'>
        <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
          <label>
            Sort by genre : <br />
            <select>
              {this.props.genres.map((genre) => (
                <option key={genre.genre}>{genre.genre}</option>
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
