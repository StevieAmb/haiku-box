import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super()
    this.state = {
      lineOne: '',
      lineTwo: '',
      lineThree: ''
    }
  }

  render() {
    return (
      <h2>This is working!</h2>
    )
  }
}

export default Form; 