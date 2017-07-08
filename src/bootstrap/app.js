import React from 'react';
import { Provider } from 'react-redux';

import generateStore from './generateStore';
import Initializer from './initializer';

import MultiWatch from "../components/MultiWatch/index";

import '../App.css';

const store = generateStore();

const App = () =>
  (
    <Provider store={store}>
      <Initializer>
        <div className="App">
          <div className="App-content">
            <MultiWatch/>
          </div>
          <div className="App-footer">
            <a href="https://ngfar.io" className="App-footer-col">ngfar 2017</a>
            <a href="https://github.com/pakokrew/multiwatch" className="App-footer-col">Github</a>
          </div>
        </div>
      </Initializer>
    </Provider>
  );

export default App;
