import React, { Component } from 'react';
import Form from './Form';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      poems: []
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Hello, Poem!</h1>
        <Form />
      </div>
    )
  }
}

export default App;
