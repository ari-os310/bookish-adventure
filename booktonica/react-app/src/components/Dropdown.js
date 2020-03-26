import React, { Component } from 'react';

class GenreMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 'Genre' };
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    console.log('View books by: ' + this.state.value);
    event.preventDefault();
  };
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Sort by genre : <br />
          <select value={this.state.value} onChange={this.handleChange}>
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
