import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import MultiWatch from "./components/MultiWatch/index";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
         Multi-Cryptowatch
        </div>
        <div className="App-content">
          <MultiWatch/>
        </div>
        <div className="App-footer">
          <span>ngfar 2017</span>
          <a href="https://github.com/pakokrew">Github</a>
        </div>
      </div>
    );
  }
}

export default App;
