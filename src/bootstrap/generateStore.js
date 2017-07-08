import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import persistState from 'redux-localstorage'

import reducers from './reducers';

const enhancer = () => compose(
  applyMiddleware(
    thunk,
  ),
  persistState('app'),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
);

export default () => createStore(
  reducers,
  enhancer(),
);
