import * as actions from './actions';
import { createReducer } from '../helpers/redux';

const initialState = {
  exchanges: [],
  pairsByExchanges: {},
};

const setEchanges = (state, { exchanges }) => ({
  ...state,
  exchanges,
});
const setPairsByExchange = (state, { pairsByExchanges }) => ({
  ...state,
  pairsByExchanges,
});

export default createReducer(initialState, {
  [actions.SET_EXCHANGES]: setEchanges,
  [actions.SET_PAIRS_BY_EXCHANGES]: setPairsByExchange,
});
