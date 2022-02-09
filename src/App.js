import React, { Component } from 'react';
import Form from './Form';
import NavBar from './NavBar';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      poems: []
    }
  }

  addPoem = () => {
    
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Form />
      </div>
    )
  }
}

export default App;
