import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <form>
          <button onClick = {this.add}>+</button>
          <button onClick = {this.substract}>-</button>
          <button>Click here for more</button>
        </form>
      </div>
    );
  }
}

export default App;
