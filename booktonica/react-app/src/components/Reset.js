import React from 'react';

// class Reset extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {

//     };

//   }
//   handleReset = event => {
//     event.preventDefault();
//     this.setState(this.initialState);
//   };
const Reset = props => {
  return (
    <button type='button' onClick={props.handleReset}>
      Reset
    </button>
  );
};

export default Reset;
