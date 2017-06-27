import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import MultiWatch from "./components/MultiWatch/index";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-content">
          <MultiWatch/>
        </div>
        <div className="App-footer">
          <a href="https://ngfar.io" className="App-footer-col">ngfar 2017</a>
          <a href="https://github.com/pakokrew/multiwatch" className="App-footer-col">Github</a>
        </div>
      </div>
    );
  }
}

export default App;
