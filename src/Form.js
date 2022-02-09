import React, { Component } from 'react';
import './Form.css';

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
      <form className='form'>
        <label>
          Line 1: 
          <input
            type='text'
            placeholder='First line'
            name='title'
            value={this.state.lineOne}
          />
        </label>

        <label>
          Line 2: 
          <input
            type='text'
            placeholder='Second line'
            name='description'
            value={this.state.lineTwo}
          />
        </label>

        <label>
          Line 3: 
        <input
          type='text'
          placeholder='Last line'
          name='description'
          value={this.state.lineThree}
        />
        </label>

        <button className='submit'>Write a Haiku!</button>
      </form>
    )
  }
}

export default Form; 