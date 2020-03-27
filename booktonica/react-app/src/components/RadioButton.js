import React, { Component } from 'react';

class SortButton extends Component {
    constructor(props) {
      super(props);
      this.state = {
        selectedOption: ''
      };
    }
  
    handleOptionChange = event => {
      this.setState({
        selectedOption: event.target.value
      });
      console.log("View by",event.target.value);
    };
  
    handleFormSubmit = event => {
      event.preventDefault();
  
      console.log('You have submitted:', this.state.selectedOption);
    };
  
      
      render() {
        return ( 
          <div onChange={this.handleOptionChange} onSubmit = {this.handleFormSubmit}>
            <input 
            type="radio" 
            value="newest" /> 
            Most Recently Published
            
            <input 
            type="radio" 
            value="oldest"/> 
            Published Long Ago
            
            <input 
            type="radio" 
            value="abc"/> 
           View Alphabetically
          </div>
         )
      }
    }
  

export default SortButton;


