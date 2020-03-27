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
        selectedOption: event.currentTarget.value
      });
      console.log("View by",event.target.value);
    };
  
    handleFormSubmit = event => {
      event.preventDefault();
  
      console.log('You have submitted:', this.state.selectedOption);
    };
  
      
      render() {
        return ( 
          <div>
            <input 
            type="radio" 
            value="newest" 
            onChange={this.handleOptionChange} onSubmit = {this.handleFormSubmit}/> 
            Most Recently Published
            
            <input 
            type="radio" 
            value="oldest"
            onChange={this.handleOptionChange} onSubmit = {this.handleFormSubmit}/> 
            Published Long Ago
            
            <input 
            type="radio" 
            value="abc"
            onChange={this.handleOptionChange} onSubmit = {this.handleFormSubmit}/> 
           View Alphabetically
          </div>
         )
      }
    }
  

export default SortButton;


