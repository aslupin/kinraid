import React, { Component } from 'react';
import './App.css';
// eslint-disable-next-line
import Randfood from './containers/Randfood.js'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Randfood />
      </div>
    );
  }
}

export default App;
