import { combineReducers } from 'redux';

import appReducer from '../business/reducer';

const dether = combineReducers({
  app: appReducer,
});

export default dether;
